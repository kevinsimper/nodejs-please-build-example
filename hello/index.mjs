import http from "http";

const PORT = process.env.PORT || 9000;
http
  .createServer((req, res) => {
    console.log("Request");
    res.end("Hello");
  })
  .listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
