const LOCALE = {
  EUR: 'es-ES',
  USD: 'en-US',
  GBP: 'en-GB',
  ARS: 'es-AR'
}

const GENESIS_BLOCK = {
  id: 0,
  creationDate: Date.now(),
  difficulty: '000',
  hash: '0',
  isMined: false,
  nonce: 1,
  previousHash: '------- genesis block hash -------'
}

const config = {
  API_URL_COINDESK: 'https://api.coindesk.com/v1/bpi/currentprice/',
  LOCALE,
  GENESIS_BLOCK
}

export {config}
