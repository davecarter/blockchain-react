export class HttpBlockChainRepository {
  constructor({config, mapper, firestore}) {
    this._config = config
    this._mapper = mapper
    this._firestore = firestore
  }

  getBlockChainData() {
    const docRef = this._firestore.collection('blockchainreact')
    return docRef.get().then(doc => {
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
    const docRef = this._firestore.doc('blockchainreact/blockList')
    return docRef.set({block}).then(doc => doc.id)
  }
}
