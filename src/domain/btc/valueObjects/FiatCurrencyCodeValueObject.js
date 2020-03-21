const __VALID_FIAT_CURRENCY_CODES__ = ['EUR', 'USD', 'ARS', 'GBP']

export class FiatCurrencyCodeValueObject {
  constructor({fiatCurrencyCode, invalidFiatCurrencyCodeErrorFactory}) {
    this._fiatCurrencyCode = fiatCurrencyCode
    this._invalidFiatCurrencyCodeErrorFactory = invalidFiatCurrencyCodeErrorFactory
  }

  static validate({fiatCurrencyCode, invalidFiatCurrencyCodeErrorFactory}) {
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
}
