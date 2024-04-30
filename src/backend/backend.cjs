const http = require("http");
const translate = require('./translate.cjs')

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Adjust as needed
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === "GET") {
    const text = req.url.replace(/%20/g, " ").replace("/", "");
    const translatedText = await translate(text);
    res.end(JSON.stringify(translatedText))
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
