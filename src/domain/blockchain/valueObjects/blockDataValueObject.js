export class BlockDataValueObject {
  constructor({id, userData, creationDate, previousHash, nonce, hash}) {
    this._id = id
    this._userData = userData
    this._creationDate = creationDate
    this._previousHash = previousHash
    this._nonce = nonce
    this._hash = hash
  }

  static validate({id, previousHash, creationDate}) {
    if (typeof id !== 'string') {
      throw new Error('Invalid id value, it *must* be a Number')
    }

    if (
      typeof previousHash === 'undefined' ||
      typeof previousHash !== 'string'
    ) {
      throw new Error('Invalid previousHash value.')
    }

    if (typeof creationDate !== 'string') {
      throw new Error(
        'Invalid Creation Date. It *must* be provided in string format'
      )
    }
  }

  id() {
    return this._id
  }

  userData() {
    return this._userData
  }

  creationDate() {
    return this._creationDate
  }

  previousHash() {
    return this._previousHash
  }

  nonce() {
    return this._nonce
  }

  hash() {
    return this._hash
  }

  toJSON() {
    return {
      id: this.id(),
      userData: this.userData(),
      creationDate: this.creationDate(),
      previousHash: this.previousHash(),
      nonce: this.nonce()
    }
  }
}
