export class GetLastBlockChainBlockUseCase {
  constructor({blockRequestFactory, repository}) {
    this._blockRequestFactory = blockRequestFactory
    this._repository = repository
  }

  execute({blockNumber, previousHash}) {
    const blockValueObject = this._repository.getBlockChainData({
      blockRequest: this._blockRequestFactory({
        blockId: blockNumber,
        previousHash
      })
    })

    return blockValueObject.toJSON()
  }
}
