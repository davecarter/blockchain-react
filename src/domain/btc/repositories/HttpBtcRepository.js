export class HttpBtcRepository {
  constructor({config, mapper, fetcher}) {
    this._config = config
    this._mapper = mapper
    this._fetcher = fetcher
  }

  async getCurrentPrice({fiatCurrencyCodeVO}) {
    const {API_URL_COINDESK} = this._config
    const fiatCurrencyCode = fiatCurrencyCodeVO.fiatCurrencyCode()
    const endPoint = `${API_URL_COINDESK}${fiatCurrencyCode}.json`

    return this._fetcher
      .get(endPoint)
      .then(response =>
        this._mapper.setParams(fiatCurrencyCode).map(response.data)
      )
      .catch(error => window.console.error(error))
  }
}
