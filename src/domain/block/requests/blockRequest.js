export class BlockRequest {
  constructor({blockId, previousHash}) {
    this._blockId = blockId
    this._previousHash = previousHash
  }

  blockId() {
    return this._blockId
  }

  previousHash() {
    return this._previousHash
  }
}
