import {FromRawBlockValueObjectToMinedBlockMapper} from './fromRawBlockValueObjectToMinedBlockMapper'
import {BlockValueObjectsFactory} from '../valueObjects/factory'

export class BlockMappersFactory {
  static fromRawBlockValueObjectToMinedBlockMapper = ({config, SHA256}) =>
    new FromRawBlockValueObjectToMinedBlockMapper({
      config,
      SHA256,
      blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
    })
}
