import {BlockValueObject} from './blockValueObject'
import {BlockDataValueObject} from './blockDataValueObject'

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

  static blockDataValueObject = ({
    id,
    creationDate,
    previousHash,
    userData,
    nonce,
    hash
  }) => {
    BlockDataValueObject.validate({id, creationDate, previousHash})
    return new BlockDataValueObject({
      id,
      creationDate,
      previousHash,
      userData,
      nonce,
      hash
    })
  }
}
