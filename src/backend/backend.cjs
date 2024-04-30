const http = require("http");
const translate = require('./translate.cjs')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    const text = req.url.replace(/%20/g, " ").replace("/", "");
    const translatedText = await translate(text);
    console.log("Translated Text", translatedText)
    res.end(translatedText)
  } else {
    // Only GET method is supported
    res.statusCode = 405;
    res.end("Method Not Allowed\n");
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
