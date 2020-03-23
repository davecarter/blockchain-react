const LOCALE = {
  EUR: 'es-ES',
  USD: 'en-US',
  GBP: 'en-GB',
  ARS: 'es-AR'
}

const MOCKED_BLOCKCHAIN_DATA = [
  {
    blockId: 0,
    creationDate: Date.now(),
    previousHash: 'Genesis',
    blockData: 'Genesis Block',
    nonce: 1,
    currentHash: 0,
    currentDifficulty: '00'
  }
]

const config = {
  API_URL_COINDESK: 'https://api.coindesk.com/v1/bpi/currentprice/',
  LOCALE,
  MOCKED_BLOCKCHAIN_DATA
}

export {config}
