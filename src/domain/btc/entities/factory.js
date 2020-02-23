import {BtcCurrencyEntity} from './BtcCurrencyEntity'

export class BtcCurrencyEntityFactory {
  static btcCurrencyEntity = ({time, disclaimer, eur, usd}) =>
    new BtcCurrencyEntity({time, disclaimer, eur, usd})
}
