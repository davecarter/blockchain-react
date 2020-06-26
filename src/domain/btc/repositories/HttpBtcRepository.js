import {BtcRepository} from './BtcRepository'
import axios from 'axios'

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

    return axios
      .get(endPoint)
      .then(response =>
        this._mapper.setParams(fiatCurrencyCode).map(response.data)
      )
      .catch(error => window.console.error(error))
  }
}
