export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building
      && this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage
    ) this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
