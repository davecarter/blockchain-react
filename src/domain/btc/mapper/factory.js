import {FromApiResponseToBtcEntityMapper} from './FromApiResponseToBtcEntityMapper'
import {CurrenciesValueObjectFactory} from '../valueObjects/factory'

export class BtcMapperFactory {
  static fromApiResponseToBtcEntityMapper = ({config}) =>
    new FromApiResponseToBtcEntityMapper({
      config,
      btcCryptoCurrencyValueObjectFactory:
        CurrenciesValueObjectFactory.btcCryptoCurrencyValueObject
    })
}
