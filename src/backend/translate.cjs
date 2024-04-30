const puppeteer = require('puppeteer');

const translate = async (text) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();

  try {
    await page.goto("https://www.easyhindityping.com/english-to-konkani-translation");
    await page.waitForSelector("#SourceTextarea");
    await page.type("#SourceTextarea", text);
    await page.click("#SubmitTranslation");

    // Use a promise to wait for the text to be translated
    const result = await new Promise(async (resolve) => {
      const interval = setInterval(async () => {
        const translatedText = await page.evaluate(() => {
          const textarea = document.querySelector("#TargetTextarea");
          if (textarea) {
            // @ts-ignore
            return textarea.value;
          }
          return ""; // If no textarea is found, return an empty string
        });

        if (translatedText !== "") {
          clearInterval(interval);
          resolve(translatedText);
        } else {
        }
      }, 100); // Slightly increase the interval time to reduce load
    });

    return result;
  } finally {
    await page.close();
    await browser.close();
  }
};

module.exports = translate;
