const express = require('express');
const fs = require('node:fs');

const databasePath = process.argv[2];

const app = express();

app.get('/', (request, response) => response.send('Hello Holberton School!'));

app.get('/students', (request, response) => {
  let res = 'This is the list of our students\n';
  try {
    const data = fs.readFileSync(databasePath, 'utf-8');
    const dataArray = data.split('\n');
    dataArray.pop();
    dataArray.shift();

    res += `Number of students: ${dataArray.length}\n`;

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
      res += `Number of students in ${field}: 6. List: ${fields[field].join(', ')}\n`;
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  return response.send(res);
});

app.listen(1245);
