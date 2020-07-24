import {FromApiResponseToBlockValueObjectMapper} from './fromApiResponseToBlockValueObjectMapper'
import {FromBlockDataVOToMinedRawBlockMapper} from './fromBlockDataVOToMinedRawBlockMapper'
import {BlockValueObjectsFactory} from '../valueObjects/factory'

export class BlockMappersFactory {
  static fromApiResponseToBlockValueObjectMapper = ({config}) =>
    new FromApiResponseToBlockValueObjectMapper({
      config,
      blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
    })

  static fromBlockDataVOToMinedRawBlockMapper = ({config, SHA256}) =>
    new FromBlockDataVOToMinedRawBlockMapper({config, SHA256})
}
