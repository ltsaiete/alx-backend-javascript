import { readDatabase } from '../utils';
const databasePath = process.argv[2];
export class StudentsController {
  static async getAllStudents(request, response) {
    let display = 'This is the list of our students\n';

    try {
      const fields = await readDatabase(databasePath);

      Object.keys(fields).forEach((field) => {
        display += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }

    return response.send(display);
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') return response.status(500).send('Major parameter must be CS or SWE');

    try {
      const fields = await readDatabase(databasePath);
      const display = `List: ${fields[major].join(', ')}`;
      return response.send(display);
    } catch (error) {
      const display = 'Cannot load the database';
      return response.status(500).send(display);
    }
  }
}
