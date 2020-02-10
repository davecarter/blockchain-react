import {InvalidCurrencyError} from './InvalidCurrencyError'

export class BtcErrorsFactory {
  static invalidCurrencyError = msg => new InvalidCurrencyError(msg)
}
