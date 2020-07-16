export class LocalRepository {
  constructor({config, mapper}) {
    this._config = config
    this._mapper = mapper
  }

  getBlockChainData() {
    return window
      .fetch('http://localhost:3000/blocks')
      .then(res => res.json())
      .then(data => data)
  }
}
