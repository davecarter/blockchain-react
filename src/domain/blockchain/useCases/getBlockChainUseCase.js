export class GetBlockChainUseCase {
  constructor({blockRequestFactory, repository}) {
    this._blockRequestFactory = blockRequestFactory
    this._repository = repository
  }

  execute() {
    const blockChainData = this._repository.getBlockChainData()
    return blockChainData
  }
}
