import {BtcErrorsFactory} from '../errors/factory'
import {FiatCurrencyCodeValueObject} from './FiatCurrencyCodeValueObject'
import {BtcCryptoCurrencyValueObject} from './BtcCryptoCurrencyValueObject'

export class CurrenciesValueObjectFactory {
  static fiatCurrencyCodeValueObject = ({
    fiatCurrencyCode,
    invalidFiatCurrencyCodeErrorFactory
  }) => {
    FiatCurrencyCodeValueObject.validate({
      fiatCurrencyCode,
      invalidFiatCurrencyCodeErrorFactory:
        BtcErrorsFactory.invalidFiatCurrencyCodeError
    })

    return new FiatCurrencyCodeValueObject({
      fiatCurrencyCode,
      invalidFiatCurrencyCodeErrorFactory
    })
  }

  static btcCryptoCurrencyValueObject = ({
    value,
    fiatCurrencyCode,
    updated,
    invalidFiatCurrencyCodeErrorFactory,
    invalidValueErrorFactory
  }) => {
    BtcCryptoCurrencyValueObject.validate({
      value,
      fiatCurrencyCode,
      invalidFiatCurrencyCodeErrorFactory:
        BtcErrorsFactory.invalidFiatCurrencyCodeError,
      invalidValueErrorFactory: BtcErrorsFactory.invalidValueError
    })

    return new BtcCryptoCurrencyValueObject({
      value,
      fiatCurrencyCode,
      updated,
      invalidFiatCurrencyCodeErrorFactory,
      invalidValueErrorFactory
    })
  }
}
