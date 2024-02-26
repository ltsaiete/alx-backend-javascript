const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const app = express();

app.get('/', (request, response) => response.send('Hello Holberton School!'));

app.get('/students', async (request, response) => {
  let res = 'This is the list of our students\n';

  try {
    const messages = await countStudents(databasePath);
    messages.forEach((message) => {
      res += `${message}\n`;
    });
  } catch (error) {
    res += 'Cannot load the database';
  }

  return response.send(res);
});

app.listen(1245);
