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

  setGenesisBlock({genesisBlockData}) {
    const blockData = genesisBlockData.blockData()
    const docRef = this._firestore.collection('blockchainreact')
    return docRef.add({blockData}).then(doc => doc.id)
  }
}
