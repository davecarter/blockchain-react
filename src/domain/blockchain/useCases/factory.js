import {GetBlockChainUseCase} from './getBlockChainUseCase'
import {SetBlockUseCase} from './setBlockUseCase'

import {BlockRequestsFactory} from '../requests/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'

export class BlockUseCasesFactory {
  static getBlockChainUseCase = ({config}) =>
    new GetBlockChainUseCase({
      config,
      repository: BlockChainRepositoryFactory.localStorageRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })

  static setBlockUseCase = ({config}) =>
    new SetBlockUseCase({
      config,
      repository: BlockChainRepositoryFactory.localStorageRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
