export default class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
