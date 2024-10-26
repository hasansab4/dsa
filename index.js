import http from 'http';
import fs from 'fs';
import path from 'path';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Check if the URL matches `/debounceAndThrottle/index.html`
  if (req.url === '/debounceAndThrottle/index.html') {
    const filePath = path.join(process.cwd(), 'debounceAndThrottle', 'index.html');

    // Read the file and send it as a response
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    // Handle other routes or send a default response
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
