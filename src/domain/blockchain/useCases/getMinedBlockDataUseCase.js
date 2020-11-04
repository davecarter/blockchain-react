export class GetMinedBlockDataUseCase {
  constructor({config, mapper, blockData}) {
    this._config = config
    this._mapper = mapper
    this._blockData = blockData
  }

  execute({id, userData, creationDate, previousHash}) {
    const validHash = this._mapper.map({
      blockDataVO: this._blockData({
        id,
        userData,
        creationDate,
        previousHash,
        nonce: 0,
        hash: '0'
      })
    })

    return validHash
  }
}
