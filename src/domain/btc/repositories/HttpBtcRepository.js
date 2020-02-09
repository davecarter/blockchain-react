import {BtcRepository} from './BtcRepository'

export class HttpBtcRepository extends BtcRepository {
  constructor({config, mapper}) {
    super()
    this._config = config
    this._mapper = mapper
  }

  async getCurrentPrice({currency}) {
    const {API_URL_COINDESK} = this._config
    const endPoint = `${API_URL_COINDESK}${currency}`
    return window
      .fetch(endPoint)
      .then(response => response.json())
      .then(data => this._mapper.map(data))
  }
}
