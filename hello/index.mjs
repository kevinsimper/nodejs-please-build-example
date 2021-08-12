import http from "http";
import { log } from "./tslog/log.js";

const PORT = process.env.PORT || 9000;
http
  .createServer((req, res) => {
    log("Request");
    res.end("Hello");
  })
  .listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
