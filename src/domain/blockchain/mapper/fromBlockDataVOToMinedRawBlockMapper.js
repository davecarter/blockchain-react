class FromBlockDataVOToMinedRawBlockMapper {
  constructor({config, SHA256}) {
    this._config = config
    this._SHA256 = SHA256
  }

  map({blockDataVO}) {
    return blockDataVO
  }
}

export {FromBlockDataVOToMinedRawBlockMapper}
