import {SetBlockService} from './setBlockService'
import {BlockRequestsFactory} from '../requests/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'

export class BlockServicesFactory {
  static setBlockService = ({config}) =>
    new SetBlockService({
      config,
      repository: BlockChainRepositoryFactory.httpBlockChainRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })
}
