export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Name must be a Number');
    this._name = String(name);
    this._length = Number(length);
    students.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('Students must be an array of string');
      this._students.push(String(student));
    });
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    this._name = String(name);
  }

  get length() {
    return this._length;
  }

  set length(number) {
    if (typeof length !== 'number') throw new TypeError('Name must be a Number');
    this._length = Number(number);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    students.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('Students must be an array of string');
      this._students.push(String(student));
    });
  }
}
