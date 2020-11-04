class FromBlockDataVOToMinedRawBlockMapper {
  constructor({config, SHA256}) {
    this._config = config
    this._SHA256 = SHA256
  }

  _createHash = ({id, userData, nonce}) => {
    const hash = this._SHA256(id + userData + nonce).toString()
    return hash
  }

  _handleMiner = ({id, userData, nonce, hash}) => {
    const difficulty = this._config.GENESIS_BLOCK.difficulty
    while (!hash.startsWith(difficulty)) {
      nonce++
      hash = this._createHash({id, userData, nonce})
    }

    return hash
  }

  map({blockDataVO}) {
    const id = blockDataVO.id()
    const userData = blockDataVO.userData()
    const nonce = blockDataVO.nonce()
    const hash = blockDataVO.hash()
    return this._handleMiner({id, userData, nonce, hash})
  }
}

export {FromBlockDataVOToMinedRawBlockMapper}
