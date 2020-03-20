import {BtcCurrencyValueObject} from './BtcCurrencyValueObject'
import {BtcErrorsFactory} from '../errors/factory'
import {FiatCurrencyValueObject} from './FiatCurrencyValueObject'

export class BtcValueObjectFactory {
  static btcCurrencyValueObject = ({currency}) => {
    BtcCurrencyValueObject.validate({
      currency,
      invalidCurrencyErrorFactory: BtcErrorsFactory.invalidCurrencyError
    })
    return new BtcCurrencyValueObject({currency})
  }

  static fiatCurrencyValueObject = ({fiatCurrency, value}) =>
    new FiatCurrencyValueObject({fiatCurrency, value})
}
