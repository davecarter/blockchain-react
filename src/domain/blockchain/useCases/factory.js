import {GetBlockChainUseCase} from './getBlockChainUseCase'
import {BlockRequestsFactory} from '../requests/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'

export class BlockUseCasesFactory {
  static getBlockChainUseCase = ({config}) =>
    new GetBlockChainUseCase({
      config,
      repository: BlockChainRepositoryFactory.localRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
