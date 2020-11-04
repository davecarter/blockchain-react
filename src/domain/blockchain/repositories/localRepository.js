export class LocalRepository {
  constructor({config, fetcher}) {
    this._config = config
    this._fetcher = fetcher
  }

  getBlockChainData() {
    return this._fetcher
      .get('http://localhost:3000/blocks')
      .then(response => response?.data)
      .catch(error => window.console.error(error))
  }
}
