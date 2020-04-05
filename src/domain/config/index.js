import {firebaseConfig} from './firebaseConfig'

const LOCALE = {
  EUR: 'es-ES',
  USD: 'en-US',
  GBP: 'en-GB',
  ARS: 'es-AR'
}

const GENESIS_BLOCK = {
  blockId: 0,
  creationDate: Date.now(),
  previousHash: '------- genesis block hash -------',
  blockData: 'Genesis Block',
  hash: '0',
  currentDifficulty: '0000'
}

const config = {
  API_URL_COINDESK: 'https://api.coindesk.com/v1/bpi/currentprice/',
  LOCALE,
  GENESIS_BLOCK,
  FIREBASE: firebaseConfig
}

export {config}
