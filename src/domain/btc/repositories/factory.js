import {HttpBtcRepository} from './HttpBtcRepository'
import {BtcMapperFactory} from '../mapper/factory'

export class BtcRepositoryFactory {
  static httpBtcRepository = ({config, fetcher}) =>
    new HttpBtcRepository({
      config,
      mapper: BtcMapperFactory.fromApiResponseToBtcEntityMapper({config}),
      fetcher
    })
}
