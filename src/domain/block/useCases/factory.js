import {GetLastBlockChainBlockUseCase} from './getLastBlockChainBlockUseCase'
import {BlockRequestsFactory} from '../requests/factory'
import {BlockRepositoryFactory} from '../repositories/factory'

export class BlockUseCasesFactory {
  static getLastBlockChainBlockUseCase = ({config}) =>
    new GetLastBlockChainBlockUseCase({
      config,
      repository: BlockRepositoryFactory.httpBlockRepository({config}),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
