const http = require('http');

// Tạo server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Lắng nghe cổng 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on http://127.0.0.1:3000/');
});