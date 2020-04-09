import {HttpBlockChainRepository} from './httpBlockChainRepository'
import {BlockMappersFactory} from '../mapper/factory'
import {initializeFirebaseApp} from '../../initializeFirebaseApp'

export class BlockChainRepositoryFactory {
  static httpBlockChainRepository = ({config}) => {
    return new HttpBlockChainRepository({
      config,
      mapper: BlockMappersFactory.fromApiResponseToBlockValueObjectMapper({
        config
      }),
      firestore: initializeFirebaseApp
    })
  }
}
