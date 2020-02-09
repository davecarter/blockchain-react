import {GetCurrentBtcPriceUseCase} from './getCurrentBtcPriceUseCase'
import {BtcRepositoryFactory} from '../repositories/factory'

export class BtcUseCasesFactory {
  static getCurrentBtcPriceUseCase = ({config}) =>
    new GetCurrentBtcPriceUseCase({
      repository: BtcRepositoryFactory.httpBtcRepository({config})
    })
}
