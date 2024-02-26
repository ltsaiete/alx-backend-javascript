const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = http.createServer().listen(1245);

app.on('request', async (request, response) => {
  if (request.url === '/students') {
    response.write('This is the list of our students\n');

    try {
      const messages = await countStudents(databasePath);
      messages.forEach((message) => response.write(`${message}\n`));
    } catch (error) {
      response.write(error.message);
    }
    response.end();
  } else {
    response.write('Hello Holberton School!');
  }
  response.end();
});

module.exports = app;
