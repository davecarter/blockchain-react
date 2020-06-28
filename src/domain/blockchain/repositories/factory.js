import {BlockMappersFactory} from '../mapper/factory'
import {LocalStorageRepository} from './localStorageRepository'

export class BlockChainRepositoryFactory {
  static localStorageRepository = ({config}) => {
    return new LocalStorageRepository({
      config,
      mapper: BlockMappersFactory.fromApiResponseToBlockValueObjectMapper({
        config
      })
    })
  }
}
