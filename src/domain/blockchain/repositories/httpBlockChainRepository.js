export class HttpBlockChainRepository {
  constructor({config, mapper, firestore}) {
    this._config = config
    this._mapper = mapper
    this._firestore = firestore
  }

  getBlockChainData() {
    const docRef = this._firestore.collection('blockchain/blocklist')
    return docRef.get().then(doc => {
      if (doc?.exists) {
        const block = doc.data()
        return block
      }
    })
  }

  setGenesisBlock({genesisBlockData}) {
    const blockData = genesisBlockData.blockData()
    const docRef = this._firestore.collection('blockchainreact')
    return docRef.add({blockData}).then(doc => doc.id)
  }
}
