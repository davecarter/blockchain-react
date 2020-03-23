export class FromApiResponseToBlockValueObjectMapper {
  constructor({config, SHA256, blockValueObjectFactory}) {
    this._config = config
    this._SHA256 = SHA256
    this._blockValueObjectFactory = blockValueObjectFactory
  }

  setParams(MOCKED_BLOCKCHAIN_DATA) {
    const {
      creationDate,
      previousHash,
      blockData,
      nonce,
      currentDifficulty
    } = MOCKED_BLOCKCHAIN_DATA[0]

    this._creationDate = creationDate
    this._previousHash = previousHash
    this._blockData = blockData
    this._nonce = nonce
    this._currentDifficulty = currentDifficulty
    return this
  }

  _createCurrentHash = () =>
    this._SHA256(
      this._blockId + this._creationDate + this._blockData
    ).toString()

  _mineValidHash = () => {}

  map({blockId}) {
    return this._blockValueObjectFactory({
      blockId,
      creationDate: this._creationDate,
      previousHash: this._previousHash,
      blockData: this._blockData,
      nonce: this._nonce,
      currentHash: this._createCurrentHash()
    })
  }
}
