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

  map(apiResponse) {
    const {EUR, USD} = apiResponse?.bpi

    return this._btcCurrencyEntityFactory({
      time: apiResponse?.time?.updated,
      disclaimer: apiResponse?.disclaimer,
      eur: this.formatCurrency(EUR, 'es'),
      usd: this.formatCurrency(USD, 'us')
    })
  }
}
