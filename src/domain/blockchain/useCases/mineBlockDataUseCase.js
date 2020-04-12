class MineBlockDataUseCase {
  constructor({blockRequestFactory, setBlockService, mapper}) {
    this._blockRequestFactory = blockRequestFactory
    this._setBlockService = setBlockService
    this._mapper = mapper
  }

  async execute({blockData}) {
    const minedBlockValueObject = await this._mapper
      .setParams({
        blockData: this._blockRequestFactory({
          blockData
        })
      })
      .map()
    this._setBlockService.execute({minedBlockValueObject})
  }
}

export {MineBlockDataUseCase}
