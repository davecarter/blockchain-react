import {BlockValueObject} from './blockValueObject'

export class BlockValueObjectsFactory {
  static blockValueObject = ({blockId}) => {
    BlockValueObject.validate({blockId})
    return new BlockValueObject({blockId})
  }
}
