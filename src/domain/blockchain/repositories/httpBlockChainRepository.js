export class HttpBlockChainRepository {
  constructor({config, mapper, firestore}) {
    this._config = config
    this._mapper = mapper
    this._firestore = firestore
  }

  getBlockChainData() {
    const collection = this._firestore.collection('blockchainreact')
    return collection.get().then(querySnapshot => {
      var blocklist = []
      querySnapshot.forEach(doc => {
        blocklist.push(doc.data())
      })
      return blocklist
    })
  }

  setBlock({blockData}) {
    const block = blockData.value()
    return this._firestore
      .collection('blockchainreact')
      .doc(`block-${block.id}`)
      .set(block)
      .then(() => {
        window.console.log(`Added Block number ${block.id}`)
        this.getBlockChainData()
      })
  }
}
