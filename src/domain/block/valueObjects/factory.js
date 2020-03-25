import {BlockValueObject} from './blockValueObject'

export class BlockValueObjectsFactory {
  static blockValueObject = ({
    blockId,
    creationDate,
    previousHash,
    blockData,
    currentHash,
    currentDifficulty
  }) => {
    BlockValueObject.validate({blockId, previousHash})
    return new BlockValueObject({
      blockId,
      creationDate,
      previousHash,
      blockData,
      currentHash,
      currentDifficulty
    })
  }
}
