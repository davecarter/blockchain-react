import {GetCurrentBtcPriceUseCase} from './getCurrentBtcPriceUseCase'
import {BtcRepositoryFactory} from '../repositories/factory'
import {CurrenciesValueObjectFactory} from '../valueObjects/factory'

export class BtcUseCasesFactory {
  static getCurrentBtcPriceUseCase = ({config, fetcher}) =>
    new GetCurrentBtcPriceUseCase({
      repository: BtcRepositoryFactory.httpBtcRepository({config, fetcher}),
      fiatCurrencyCodeValueObjectFactory:
        CurrenciesValueObjectFactory.fiatCurrencyCodeValueObject
    })
}
