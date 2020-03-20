export class FromApiResponseToBtcEntityMapper {
  constructor({config, btcCurrencyEntityFactory}) {
    this._config = config
    this._btcCurrencyEntityFactory = btcCurrencyEntityFactory
  }

  // eslint-disable-next-line camelcase
  formatCurrency = ({rate_float, code}, countryCode) => {
    const {LOCALE} = this._config
    return new Intl.NumberFormat(LOCALE[countryCode], {
      style: 'currency',
      currency: code,
      minimumFractionDigits: 0
    }).format(parseInt(rate_float))
  }

  setParams(currency) {
    this._currency = currency
    return this
  }

  map(apiResponse) {
    // eslint-disable-next-line no-debugger
    debugger
    const {USD} = apiResponse?.bpi
    const {EUR} = apiResponse?.bpi?.this._currency

    return this._btcCurrencyEntityFactory({
      time: apiResponse?.time?.updated,
      disclaimer: apiResponse?.disclaimer,
      currency: this.formatCurrency(, 'es'),
      usd: this.formatCurrency(USD, 'us')
    })
  }
}
