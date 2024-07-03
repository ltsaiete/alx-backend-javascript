const http = require('http');

const app = http.createServer().listen(1245);

app.on('request', (request, response) => {
  response.write('Hello Holberton School!');
  response.end();
});

module.exports = app;
