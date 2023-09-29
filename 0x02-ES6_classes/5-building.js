export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const evacuationMethod = Building.prototype.evacuationWarningMessage;
    if (this.constructor !== Building
      && this.evacuationWarningMessage === evacuationMethod) {
      this.evacuationWarningMessage();
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    this._sqft = sqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
  /* eslint-enable */
}
