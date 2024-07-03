const countStudents = require('./3-read_file_async');

countStudents('database.csv')
  .then((data) => {
    console.log('Done!');
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
