import {GetCurrentBtcPriceUseCase} from './GetCurrentBtcPriceUseCase'
import {BtcRepositoryFactory} from '../repositories/factory'
import {CurrenciesValueObjectFactory} from '../valueObjects/factory'

export class BtcUseCasesFactory {
  static getCurrentBtcPriceUseCase = ({config}) =>
    new GetCurrentBtcPriceUseCase({
      repository: BtcRepositoryFactory.httpBtcRepository({config}),
      fiatCurrencyCodeValueObjectFactory:
        CurrenciesValueObjectFactory.fiatCurrencyCodeValueObject
    })
}
