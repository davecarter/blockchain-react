import {FromApiResponseToBlockValueObjectMapper} from './fromApiResponseToBlockValueObjectMapper'
import {BlockValueObjectsFactory} from '../valueObjects/factory'

export class BlockMappersFactory {
  static fromApiResponseToBlockValueObjectMapper = ({config}) =>
    new FromApiResponseToBlockValueObjectMapper({
      config,
      blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
    })
}
