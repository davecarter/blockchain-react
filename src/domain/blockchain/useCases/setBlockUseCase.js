export class SetBlockUseCase {
  constructor({config, repository, blockRequestFactory}) {
    this._config = config
    this._repository = repository
    this._blockRequestFactory = blockRequestFactory
  }

  async execute({blockData}) {
    const block = await this._repository.setBlock({
      blockData: this._blockRequestFactory({
        blockData
      })
    })

    return block
  }
}
