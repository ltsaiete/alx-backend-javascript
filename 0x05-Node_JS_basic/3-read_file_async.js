const fs = require('fs');

function countStudents(path) {
  return fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
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
      console.log(`Number of students in ${field}: 6. List: ${fields[field].join(', ')}`);
    });
  });
}

module.exports = countStudents;
