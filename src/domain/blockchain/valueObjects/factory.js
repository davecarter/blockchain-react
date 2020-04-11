import {BlockValueObject} from './blockValueObject'

export class BlockValueObjectsFactory {
  static blockValueObject = ({
    id,
    creationDate,
    previousHash,
    userData,
    currentHash,
    currentDifficulty
  }) => {
    BlockValueObject.validate({id, previousHash})
    return new BlockValueObject({
      id,
      creationDate,
      previousHash,
      userData,
      currentHash,
      currentDifficulty
    })
  }
}
