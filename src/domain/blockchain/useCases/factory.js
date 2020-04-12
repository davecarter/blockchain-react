import {GetBlockChainUseCase} from './getBlockChainUseCase'
import {SetBlockUseCase} from './setBlockUseCase'
import {MineBlockDataUseCase} from './mineBlockDataUseCase'

import {BlockRequestsFactory} from '../requests/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'
import {BlockMappersFactory} from '../mapper/factory'
import {BlockValueObjectsFactory} from '../valueObjects/factory'
import {BlockServicesFactory} from '../services/factory'

export class BlockUseCasesFactory {
  static getBlockChainUseCase = ({config}) =>
    new GetBlockChainUseCase({
      config,
      repository: BlockChainRepositoryFactory.httpBlockChainRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })

  static setBlockUseCase = ({config}) =>
    new SetBlockUseCase({
      config,
      repository: BlockChainRepositoryFactory.httpBlockChainRepository({
        config
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })

  static mineBlockDataUseCase = ({config, SHA256}) =>
    new MineBlockDataUseCase({
      config,
      mapper: BlockMappersFactory.fromRawBlockValueObjectToMinedBlockMapper({
        config,
        SHA256,
        blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest,
      setBlockService: BlockServicesFactory.setBlockService({
        blockRequestFactory: BlockRequestsFactory.blockRequest,
        repository: BlockChainRepositoryFactory.httpBlockChainRepository({
          config
        })
      })
    })
}
