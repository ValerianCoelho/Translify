const http = require("http");
const puppeteer = require('puppeteer');

const translate = async (page, text) => {
  try {
    await page.waitForSelector("#SourceTextarea");
    await page.evaluate(() => {
      const textarea = document.querySelector("#SourceTextarea");
      if (textarea) {
        // @ts-ignore
        textarea.value = "";
      }
    });
    await page.type("#SourceTextarea", text);
    await page.click("#SubmitTranslation");

    const result = await new Promise(async (resolve) => {
      const interval = setInterval(async () => {
        const translatedText = await page.evaluate(() => {
          const textarea = document.querySelector("#TargetTextarea");
          if (textarea ) {
            // @ts-ignore
            return textarea.value;
          }
          return ""; 
        });

        if ( translatedText !== "" && translatedText != prevText) {
          prevText = translatedText;
          clearInterval(interval);
          resolve(translatedText);
        }
      }, 100); 
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};



const hostname = "127.0.0.1";
const port = 3000;

let browser, page,prevText='';

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === "GET") {
    const text = decodeURIComponent(req.url.slice(1)); // Improved decoding
    const translatedText = await translate(page, text);
    res.end(JSON.stringify(translatedText));
  } else {
    res.statusCode = 405;
    res.end("Method Not Allowed\n");
  }
});

(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("https://www.easyhindityping.com/english-to-konkani-translation");
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
})();
