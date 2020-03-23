import {BlockValueObject} from './blockValueObject'

export class BlockValueObjectsFactory {
  static blockValueObject = ({
    blockId,
    creationDate,
    previousHash,
    blockData,
    nonce,
    currentHash
  }) => {
    BlockValueObject.validate({blockId, previousHash})
    return new BlockValueObject({
      blockId,
      creationDate,
      previousHash,
      blockData,
      nonce,
      currentHash
    })
  }
}
