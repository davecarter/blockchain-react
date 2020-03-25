export class FromApiResponseToBlockValueObjectMapper {
  constructor({config, blockValueObjectFactory}) {
    this._config = config
    this._blockValueObjectFactory = blockValueObjectFactory
  }

  setParams(MOCKED_BLOCKCHAIN_DATA) {
    const {
      creationDate,
      previousHash,
      blockData,
      currentDifficulty,
      currentHash
    } = MOCKED_BLOCKCHAIN_DATA[0]

    this._creationDate = creationDate
    this._previousHash = previousHash
    this._blockData = blockData
    this._currentHash = currentHash
    this._currentDifficulty = currentDifficulty
    return this
  }

  map({blockId}) {
    return this._blockValueObjectFactory({
      blockId,
      creationDate: this._creationDate,
      previousHash: this._previousHash,
      blockData: this._blockData,
      currentHash: this._currentHash,
      currentDifficulty: this._currentDifficulty
    })
  }
}
