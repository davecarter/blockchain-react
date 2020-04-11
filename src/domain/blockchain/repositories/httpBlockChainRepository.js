export class HttpBlockChainRepository {
  constructor({config, mapper, firestore}) {
    this._config = config
    this._mapper = mapper
    this._firestore = firestore
  }

  getBlockChainData() {
    const collection = this._firestore
      .collection('blockchainreact')
      .orderBy('id', 'desc')
    return collection.get().then(doc => {
      const blocklist = []
      doc.forEach(block => {
        const blockData = block.data()
        blocklist.push(blockData)
      })
      return blocklist
    })
  }

  setBlock({blockData}) {
    const block = blockData.value()
    const collection = this._firestore.collection('blockchainreact')
    return collection
      .add(block)
      .then(() => console.log(`Added Block number ${block.id}`))
  }
}
