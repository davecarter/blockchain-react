import {FromApiResponseToBtcEntityMapper} from './FromApiResponseToBtcEntityMapper'

export class BtcMapperFactory {
  static fromApiResponseToBtcEntityMapper = () =>
    new FromApiResponseToBtcEntityMapper()
}
