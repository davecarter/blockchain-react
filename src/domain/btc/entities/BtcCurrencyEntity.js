export class BtcCurrencyEntity {
  constructor({time, disclaimer, eur, usd}) {
    this._time = time
    this._disclaimer = disclaimer
    this._eur = eur
    this._usd = usd
  }

  time() {
    return this._time
  }

  disclaimer() {
    return this._disclaimer
  }

  eur() {
    return this._eur
  }

  usd() {
    return this._usd
  }

  toJSON() {
    return {
      time: this.time(),
      disclaimer: this.disclaimer(),
      eur: this.eur(),
      usd: this.usd()
    }
  }
}
