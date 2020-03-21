/* eslint-disable camelcase */
export class FromApiResponseToBtcEntityMapper {
  constructor({config, btcCryptoCurrencyValueObjectFactory}) {
    this._config = config
    this._btcCryptoCurrencyValueObjectFactory = btcCryptoCurrencyValueObjectFactory
  }

  // eslint-disable-next-line camelcase
  formatCurrency = (rawValue, fiatCurrencyCode) => {
    const {LOCALE} = this._config
    return new Intl.NumberFormat(LOCALE[fiatCurrencyCode], {
      style: 'currency',
      currency: fiatCurrencyCode,
      minimumFractionDigits: 0
    }).format(parseInt(rawValue))
  }

  setParams(fiatCurrencyCode) {
    this._fiatCurrencyCode = fiatCurrencyCode
    return this
  }

  map(apiResponse) {
    const rawValue = apiResponse?.bpi[this._fiatCurrencyCode].rate_float

    return this._btcCryptoCurrencyValueObjectFactory({
      value: this.formatCurrency(rawValue, this._fiatCurrencyCode),
      fiatCurrencyCode: this._fiatCurrencyCode,
      updated: apiResponse?.time?.updated
    })
  }
}
