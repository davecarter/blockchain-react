import {GetBlockChainUseCase} from './getBlockChainUseCase'
import {GetMinedBlockDataUseCase} from './getMinedBlockDataUseCase'

import {BlockRequestsFactory} from '../requests/factory'
import {BlockValueObjectsFactory} from '../valueObjects/factory'
import {BlockChainRepositoryFactory} from '../repositories/factory'
import {BlockMappersFactory} from '../mapper/factory'

export class BlockUseCasesFactory {
  static getBlockChainUseCase = ({config, fetcher}) =>
    new GetBlockChainUseCase({
      config,
      repository: BlockChainRepositoryFactory.localRepository({
        config,
        fetcher
      }),
      blockRequestFactory: BlockRequestsFactory.blockRequest
    })

  static getMinedBlockDataUseCase = ({config, SHA256}) =>
    new GetMinedBlockDataUseCase({
      config,
      mapper: BlockMappersFactory.fromBlockDataVOToMinedRawBlockMapper({
        config,
        SHA256
      }),
      blockData: BlockValueObjectsFactory.blockDataValueObject
    })
}
