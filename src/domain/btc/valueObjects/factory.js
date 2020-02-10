import {BtcCurrencyValueObject} from '../valueObjects/BtcCurrencyValueObject'
import {BtcErrorsFactory} from '../errors/factory'

export class BtcValueObjectFactory {
  static btcCurrencyValueObject = ({currency}) => {
    BtcCurrencyValueObject.validate({
      currency,
      invalidCurrencyErrorFactory: BtcErrorsFactory.invalidCurrencyError
    })
    return new BtcCurrencyValueObject({currency})
  }
}
