import {HttpBlockRepository} from './HttpBlockRepository'
import {BlockMappersFactory} from '../mapper/factory'

export class BlockRepositoryFactory {
  static httpBlockRepository = ({config}) =>
    new HttpBlockRepository({
      config,
      mapper: BlockMappersFactory.fromApiResponseToBlockValueObjectMapper({
        config
      })
    })
}
