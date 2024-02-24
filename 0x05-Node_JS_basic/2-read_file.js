const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
