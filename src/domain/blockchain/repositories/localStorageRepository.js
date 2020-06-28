export class LocalStorageRepository {
  constructor({config, mapper}) {
    this._config = config
    this._mapper = mapper
  }

  getBlockChainData() {
    // const blockChainData = window.localStorage.getItem('blockChainReact')
    // if (blockChainData === undefined) {
    const blockChainData = [
      {
        id: 0,
        creationDate: Date.now(),
        difficulty: '0000',
        hash: '0',
        isMined: false,
        nonce: 1,
        previousHash: '------- genesis block hash -------'
      }
    ]
    window.localStorage.setItem(
      'blockChainReact',
      JSON.stringify(blockChainData)
    )
    // }
  }

  setBlock({blockData}) {
    // eslint-disable-next-line no-debugger
    debugger
    const blockChainData = JSON.parse(
      window.localStorage.getItem('blockChainReact')
    )
    const block = blockData.value()
    const updatedData = blockChainData.push(block)
    window.localStorage.setItem('blockChainReact', JSON.stringify(updatedData))
    this.getBlockChainData()
  }
}
