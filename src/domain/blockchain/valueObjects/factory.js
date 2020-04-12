import {BlockValueObject} from './blockValueObject'

export class BlockValueObjectsFactory {
  static blockValueObject = ({
    id,
    creationDate,
    previousHash,
    userData,
    hash,
    difficulty,
    isMined,
    nonce
  }) => {
    BlockValueObject.validate({id, previousHash})
    return new BlockValueObject({
      id,
      creationDate,
      previousHash,
      userData,
      hash,
      difficulty,
      isMined,
      nonce
    })
  }
}
