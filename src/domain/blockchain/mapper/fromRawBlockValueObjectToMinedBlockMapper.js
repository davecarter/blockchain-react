export class FromRawBlockValueObjectToMinedBlockMapper {
  constructor({config, blockValueObjectFactory, SHA256}) {
    this._config = config
    this._blockValueObjectFactory = blockValueObjectFactory
    this._SHA256 = SHA256
  }

  setParams({blockData}) {
    const rawBlock = blockData.value()
    const {
      id,
      creationDate,
      previousHash,
      userData,
      hash,
      difficulty,
      nonce
    } = rawBlock
    this._id = id
    this._creationDate = creationDate
    this._previousHash = previousHash
    this._userData = userData
    this._hash = hash
    this._difficulty = difficulty
    this._nonce = nonce
    return this
  }

  _createHash = () =>
    this._SHA256(
      this._id + this._creationDate + this._userData + this._nonce
    ).toString()

  _mineValidHash = () => {
    while (!this._hash.startsWith(this._difficulty)) {
      this._nonce++
      this._hash = this._createHash()
    }
    return this._blockValueObjectFactory({
      id: this._id,
      creationDate: this._creationDate,
      userData: this._userData,
      previousHash: this._previousHash,
      hash: this._hash,
      difficulty: this._difficulty,
      isMined: true,
      nonce: this._nonce
    })
  }

  map() {
    return this._mineValidHash()
  }
}
