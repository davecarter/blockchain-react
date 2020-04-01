export class SetGenesisBlockUseCase {
  constructor({config, repository, blockRequestFactory}) {
    this._config = config
    this._repository = repository
    this._blockRequestFactory = blockRequestFactory
  }

  async execute({blockData}) {
    const genesisblockValueObject = await this._repository.setGenesisBlock({
      genesisBlockData: this._blockRequestFactory({
        blockData
      })
    })

    return genesisblockValueObject
  }
}
