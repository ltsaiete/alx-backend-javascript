const fs = require('fs');

function getLastMessage(messages) {
  return messages[messages.length - 1];
}

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.promises
      .readFile(path, 'utf-8')
      .then((data) => {
        const students = data.split('\n');
        students.pop();
        students.shift();

        const messages = [`Number of students: ${students.length}`];

        console.log(getLastMessage(messages));

        const fields = {};

        students.forEach((student) => {
          const [firstname, , , field] = student.split(',');
          if (fields[field]) {
            fields[field].push(firstname);
          } else {
            fields[field] = [firstname];
          }
        });

        Object.keys(fields).forEach((field) => {
          messages.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
          console.log(getLastMessage(messages));
        });
        resolve(messages);
      })
      .catch(() => reject(new Error('Error: Cannot load the database')));
  });
}

module.exports = countStudents;
