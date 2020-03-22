export class GetLastBlockChainBlock {
  constructor({blockValueObjectFactory}) {
    this._blockValueObjectFactory = blockValueObjectFactory
  }

  execute({blockNumber}) {
    const BlockValueObject = this._blockValueObjectFactory({
      blockId: blockNumber
    })
    return BlockValueObject.toJSON()
  }
}
