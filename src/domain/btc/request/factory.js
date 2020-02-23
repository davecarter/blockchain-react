import {BtcValueObjectFactory} from '../valueObjects/factory'
import {GetCurrencyBtcRequest} from './GetCurrencyBtcRequest'

export class BtcRequestFactory {
  static getCurrencyBtcRequest = async ({currency}) =>
    new GetCurrencyBtcRequest({
      currency: BtcValueObjectFactory.btcCurrencyValueObject({currency})
    })
}
