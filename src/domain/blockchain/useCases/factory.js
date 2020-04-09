import {GetBlockChainUseCase} from './getBlockChainUseCase'
import {SetGenesisBlockUseCase} from './setGenesisBlockUseCase'

import {BlockRequestsFactory} from '../requests/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'

export class BlockUseCasesFactory {
  static getBlockChainUseCase = ({config}) =>
    new GetBlockChainUseCase({
      config,
      repository: BlockChainRepositoryFactory.httpBlockChainRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })

  static setGenesisBlockUseCase = ({config}) =>
    new SetGenesisBlockUseCase({
      config,
      repository: BlockChainRepositoryFactory.httpBlockChainRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
