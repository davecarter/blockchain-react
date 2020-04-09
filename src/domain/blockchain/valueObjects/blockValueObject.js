export class BlockValueObject {
  constructor({
    blockId,
    creationDate,
    previousHash,
    blockData,
    currentHash,
    currentDifficulty
  }) {
    this._blockId = blockId
    this._previousHash = previousHash
    this._creationDate = creationDate
    this._blockData = blockData
    this._currentHash = currentHash
    this._currentDifficulty = currentDifficulty
  }

  static validate({blockId, previousHash}) {
    if (typeof blockId !== 'number') {
      throw new Error('Invalid BlockId, it *must* be a Number')
    }

    if (typeof previousHash === 'undefined') {
      throw new Error('Previous Block Hash *must* be provided')
    } else if (previousHash === 0) {
      this.genesisBlock()
    }
  }

  blockId() {
    return this._blockId
  }

  toJSON() {
    return {
      blockId: this.blockId(),
      creationDate: this._creationDate,
      blockData: this._blockData,
      previousHash: this._previousHash,
      currentHash: this._currentHash,
      currentDifficulty: this._currentDifficulty
    }
  }
}
