export class BlockValueObject {
  constructor({
    id,
    creationDate,
    previousHash,
    userData,
    currentHash,
    currentDifficulty
  }) {
    this._id = id
    this._previousHash = previousHash
    this._creationDate = creationDate
    this._userData = userData
    this._currentHash = currentHash
    this._currentDifficulty = currentDifficulty
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
      currentHash: this._currentHash,
      currentDifficulty: this._currentDifficulty
    }
  }
}
