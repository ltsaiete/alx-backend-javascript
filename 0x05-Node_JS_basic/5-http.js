const http = require('http');
const fs = require('node:fs');

const databasePath = process.argv[2];

const app = http.createServer().listen(1245);

app.on('request', (request, response) => {
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const data = fs.readFileSync(databasePath, 'utf-8');
      const dataArray = data.split('\n');
      dataArray.pop();
      dataArray.shift();

      response.write(`Number of students: ${dataArray.length}\n`);

      const fields = {};

      dataArray.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (fields[field]) {
          fields[field].push(firstname);
        } else {
          fields[field] = [firstname];
        }
      });

      Object.keys(fields).forEach((field) => {
        response.write(`Number of students in ${field}: 6. List: ${fields[field].join(', ')}\n`);
      });
    } catch (error) {
      throw new Error('Cannot load the database');
    }
  } else {
    response.write('Hello Holberton School!');
  }
  response.end();
});

module.exports = app;
