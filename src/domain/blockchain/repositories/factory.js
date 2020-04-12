import {HttpBlockChainRepository} from './httpBlockChainRepository'
import {initializeFirebaseApp} from '../../initializeFirebaseApp'

export class BlockChainRepositoryFactory {
  static httpBlockChainRepository = ({config}) => {
    return new HttpBlockChainRepository({
      config,
      firestore: initializeFirebaseApp
    })
  }
}
