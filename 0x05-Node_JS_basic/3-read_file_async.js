const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
      }

      const dataArray = data.split('\n');
      dataArray.pop();
      dataArray.shift();

      console.log(`Number of students: ${dataArray.length}`);

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
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      resolve(true);
    });
  });
}

module.exports = countStudents;
