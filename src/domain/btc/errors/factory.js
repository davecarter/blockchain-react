import {InvalidFiatCurrencyCodeError} from './InvalidFiatCurrencyCodeError'
import {InvalidValueError} from './InvalidValueError'

export class BtcErrorsFactory {
  static invalidFiatCurrencyCodeError = msg =>
    new InvalidFiatCurrencyCodeError(msg)

  static invalidValueError = msg => new InvalidValueError(msg)
}
