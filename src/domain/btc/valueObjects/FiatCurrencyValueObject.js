export class FiatCurrencyValueObject {
  constructor({fiatCurrency, value}) {
    this._fiatCurrency = fiatCurrency
    this._value = value
  }

  fiatCurrency() {
    return this._fiatCurrency
  }

  value() {
    return this._value
  }
}
