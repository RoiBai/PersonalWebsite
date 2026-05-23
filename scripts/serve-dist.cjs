const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = Number(process.argv[2] || process.env.PORT || 5177);
const root = path.resolve(__dirname, "..", "dist");

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const sendFile = (response, filePath) => {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": filePath.includes(`${path.sep}assets${path.sep}`)
        ? "public, max-age=31536000, immutable"
        : "no-cache",
    });
    response.end(data);
  });
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://127.0.0.1:${port}`);
  const requestedPath = decodeURIComponent(url.pathname);
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(response, filePath);
      return;
    }

    const indexPath = path.join(root, "index.html");
    sendFile(response, indexPath);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Portfolio preview running at http://127.0.0.1:${port}/`);
});
