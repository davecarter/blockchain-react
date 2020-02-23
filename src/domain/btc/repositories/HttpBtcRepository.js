import {BtcRepository} from './BtcRepository'

export class HttpBtcRepository extends BtcRepository {
  constructor({config, mapper}) {
    super()
    this._config = config
    this._mapper = mapper
  }

  async getCurrentPrice({getCurrencyBtcRequest}) {
    const {API_URL_COINDESK} = this._config
    const currencyBtcRequest = getCurrencyBtcRequest.currency().value()
    const endPoint = `${API_URL_COINDESK}${currencyBtcRequest}`

    return window
      .fetch(endPoint)
      .then(response => response.json())
      .then(data => this._mapper.map(data))
  }
}
