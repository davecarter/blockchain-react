export class GetBlockChainUseCase {
  constructor({blockRequestFactory, repository}) {
    this._blockRequestFactory = blockRequestFactory
    this._repository = repository
  }

  async execute() {
    const blockChainData = await this._repository.getBlockChainData()
    return blockChainData || ['no data']
  }
}
