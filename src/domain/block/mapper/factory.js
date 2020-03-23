import {FromApiResponseToBlockValueObjectMapper} from './fromApiResponseToBlockValueObjectMapper'
import {BlockValueObjectsFactory} from '../valueObjects/factory'
import {SHA256} from 'crypto-js'

export class BlockMappersFactory {
  static fromApiResponseToBlockValueObjectMapper = ({config}) =>
    new FromApiResponseToBlockValueObjectMapper({
      config,
      SHA256,
      blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
    })
}
