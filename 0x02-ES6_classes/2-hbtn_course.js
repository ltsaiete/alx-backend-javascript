export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = String(name);
    this._length = Number(length);
    students.forEach((student) => {
      this._students.push(String(student));
    });
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = String(value);
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = Number(value);
  }

  get students() {
    return this._students;
  }

  set students(values) {
    values.forEach((student) => {
      this._students.push(String(student));
    });
  }
}
