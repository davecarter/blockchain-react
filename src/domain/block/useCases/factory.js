import {GetLastBlockChainBlock} from './GetLastBlockChainBlock'
import {BlockRequestsFactory} from '../requests/factory'
import {BlockRepositoryFactory} from '../repositories/factory'

export class BlockUseCasesFactory {
  static getLastBlockChainBlock = ({config}) =>
    new GetLastBlockChainBlock({
      config,
      repository: BlockRepositoryFactory.httpBlockRepository({config}),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
