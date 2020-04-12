export class BlockRequest {
  constructor({blockData}) {
    this._blockData = blockData
  }

  value() {
    return this._blockData
  }
}
