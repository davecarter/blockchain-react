import {GetCurrentBtcPriceUseCase} from './GetCurrentBtcPriceUseCase'
import {BtcRepositoryFactory} from '../repositories/factory'
import {BtcRequestFactory} from '../request/factory'

export class BtcUseCasesFactory {
  static getCurrentBtcPriceUseCase = ({config}) =>
    new GetCurrentBtcPriceUseCase({
      repository: BtcRepositoryFactory.httpBtcRepository({config}),
      getCurrencyBtcRequestFactory: BtcRequestFactory.getCurrencyBtcRequest
    })
}
