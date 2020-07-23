export class GetMinedBlockDataUseCase {
  constructor({config, mapper, blockData}) {
    this._config = config
    this._mapper = mapper
    this._blockData = blockData
  }

  execute({id, userData, creationDate, previousHash}) {
    const minedBlockDataVO = this._mapper.map({
      blockDataVO: this._blockData({id, userData, creationDate, previousHash})
    })
    console.log(minedBlockDataVO.toJSON())
    return minedBlockDataVO.toJSON()
  }
}
