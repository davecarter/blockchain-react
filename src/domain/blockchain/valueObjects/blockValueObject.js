export class BlockValueObject {
  constructor({
    id,
    creationDate,
    previousHash,
    userData,
    hash,
    difficulty,
    isMined,
    nonce
  }) {
    this._id = id
    this._previousHash = previousHash
    this._creationDate = creationDate
    this._userData = userData
    this._hash = hash
    this._difficulty = difficulty
    this._isMined = isMined
    this._nonce = nonce
  }

  static validate({id, previousHash}) {
    if (typeof id !== 'number') {
      throw new Error('Invalid id, it *must* be a Number')
    }

    if (typeof previousHash === 'undefined') {
      throw new Error('Previous Block Hash *must* be provided')
    } else if (previousHash === 0) {
      this.genesisBlock()
    }
  }

  id() {
    return this._id
  }

  toJSON() {
    return {
      id: this.id(),
      creationDate: this._creationDate,
      userData: this._userData,
      previousHash: this._previousHash,
      hash: this._hash,
      difficulty: this._difficulty,
      isMined: this._isMined,
      nonce: this._nonce
    }
  }
}
