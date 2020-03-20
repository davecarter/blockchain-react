const __VALID_CURRENCIES__ = ['EUR', 'USD', 'ARS', 'GBP']

export class BtcCurrencyValueObject {
  constructor({currency}) {
    this._currency = currency
  }

  static validate({currency, invalidCurrencyErrorFactory}) {
    if (!currency || !__VALID_CURRENCIES__.includes(currency)) {
      throw invalidCurrencyErrorFactory()
    }
  }

  value() {
    return this._currency
  }
}
