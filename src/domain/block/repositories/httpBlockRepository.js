export class HttpBlockRepository {
  constructor({config, mapper}) {
    this._config = config
    this._mapper = mapper
  }

  getBlockChainData({blockRequest}) {
    const {MOCKED_BLOCKCHAIN_DATA} = this._config
    const blockId = blockRequest.blockId()
    const previousHash = blockRequest.previousHash()

    const blockValueObject = this._mapper
      .setParams(MOCKED_BLOCKCHAIN_DATA)
      .map({blockId, previousHash})
    return blockValueObject
  }
}
