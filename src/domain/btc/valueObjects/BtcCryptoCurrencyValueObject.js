const __VALID_FIAT_CURRENCY_CODES__ = ['EUR', 'USD', 'ARS', 'GBP']

export class BtcCryptoCurrencyValueObject {
  constructor({
    value,
    fiatCurrencyCode,
    updated,
    invalidFiatCurrencyCodeErrorFactory,
    invalidValueErrorFactory
  }) {
    this._value = value
    this._fiatCurrencyCode = fiatCurrencyCode
    this._updated = updated
    this._invalidFiatCurrencyCodeErrorFactory = invalidFiatCurrencyCodeErrorFactory
    this._invalidValueErrorFactory = invalidValueErrorFactory
  }

  static validate({
    value,
    fiatCurrencyCode,
    invalidFiatCurrencyCodeErrorFactory,
    invalidValueErrorFactory
  }) {
    if (!value || typeof value !== 'string') {
      throw invalidValueErrorFactory()
    }

    if (
      !fiatCurrencyCode ||
      typeof fiatCurrencyCode !== 'string' ||
      !__VALID_FIAT_CURRENCY_CODES__.includes(fiatCurrencyCode)
    ) {
      throw invalidFiatCurrencyCodeErrorFactory()
    }
  }

  fiatCurrencyCode() {
    return this._fiatCurrencyCode
  }

  value() {
    return this._value
  }

  updated() {
    return this._updated
  }

  toJSON() {
    return {
      value: this.value(),
      fiatCurrencyCode: this.fiatCurrencyCode(),
      updated: this.updated()
    }
  }
}
