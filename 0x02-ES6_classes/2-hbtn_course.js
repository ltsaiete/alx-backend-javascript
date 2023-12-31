export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Name must be a Number');
    if (typeof students !== 'object') throw new TypeError('Students must be an array of strings');
    this._name = String(name);
    this._length = Number(length);
    this._students = students;
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

  set length(length) {
    if (typeof length !== 'number') throw new TypeError('Name must be a Number');
    this._length = Number(length);
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof students !== 'object') throw new TypeError('Students must be an array of strings');
    this._students = students;
  }
}
