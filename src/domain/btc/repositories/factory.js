import {HttpBtcRepository} from './HttpBtcRepository'
import {BtcMapperFactory} from '../mapper/factory'

export class BtcRepositoryFactory {
  static httpBtcRepository = ({config}) =>
    new HttpBtcRepository({
      config,
      mapper: BtcMapperFactory.fromApiResponseToBtcEntityMapper({config})
    })
}
