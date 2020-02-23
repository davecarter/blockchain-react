import {FromApiResponseToBtcEntityMapper} from './FromApiResponseToBtcEntityMapper'
import {BtcCurrencyEntityFactory} from '../entities/factory'
import {config} from '../../config'

export class BtcMapperFactory {
  static fromApiResponseToBtcEntityMapper = () =>
    new FromApiResponseToBtcEntityMapper({
      config,
      btcCurrencyEntityFactory: BtcCurrencyEntityFactory.btcCurrencyEntity
    })
}
