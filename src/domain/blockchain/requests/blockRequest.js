export class BlockRequest {
  constructor({blockData}) {
    this._blockData = blockData
  }

  blockData() {
    return this._blockData
  }
}
