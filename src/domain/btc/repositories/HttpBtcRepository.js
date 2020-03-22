import {BtcRepository} from './BtcRepository'

export class HttpBtcRepository extends BtcRepository {
  constructor({config, mapper}) {
    super()
    this._config = config
    this._mapper = mapper
  }

  async getCurrentPrice({fiatCurrencyCodeVO}) {
    const {API_URL_COINDESK} = this._config
    const fiatCurrencyCode = fiatCurrencyCodeVO.fiatCurrencyCode()
    const endPoint = `${API_URL_COINDESK}${fiatCurrencyCode}.json`

    return window
      .fetch(endPoint)
      .then(response => response.json())
      .then(data => this._mapper.setParams(fiatCurrencyCode).map(data))
  }
}
