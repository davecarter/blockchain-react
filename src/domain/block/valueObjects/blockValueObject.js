export class BlockValueObject {
  constructor({blockId, creationDate}) {
    this._blockId = blockId
    this._creationDate = creationDate
  }

  static validate({blockId}) {
    if (typeof blockId !== 'number') {
      throw new Error('Invalid BlockId, it *must* be a Number')
    }
  }

  blockId() {
    return this._blockId
  }

  creationDate() {
    const now = new Date()
    return now.toLocaleDateString()
  }

  blockData() {
    return `Genesis Block`
  }

  toJSON() {
    return {
      blockId: this.blockId(),
      creationDate: this.creationDate(),
      blockData: this.blockData()
    }
  }
}
