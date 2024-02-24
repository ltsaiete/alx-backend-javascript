const readline = require('node:readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  reader.close();
  console.log('This important software is now closing');
});
