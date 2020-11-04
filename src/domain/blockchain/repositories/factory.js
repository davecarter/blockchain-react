import {BlockMappersFactory} from '../mapper/factory'
import {LocalRepository} from './localRepository'

export class BlockChainRepositoryFactory {
  static localRepository = ({config, fetcher}) => {
    return new LocalRepository({
      config,
      mapper: BlockMappersFactory.fromApiResponseToBlockValueObjectMapper({
        config
      }),
      fetcher
    })
  }
}
