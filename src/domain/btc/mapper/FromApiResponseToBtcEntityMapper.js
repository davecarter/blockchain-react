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
      minimumFractionDigits: 0,
      useGrouping: true
    }).format(parseInt(rate_float))
  }

  async map(apiResponse) {
    const {EUR, USD} = apiResponse?.bpi

    return this._btcCurrencyEntityFactory({
      time: apiResponse?.time?.updated,
      disclaimer: apiResponse?.disclaimer,
      eur: await this.formatCurrency(EUR, 'es'),
      usd: await this.formatCurrency(USD, 'us')
    })
  }
}
