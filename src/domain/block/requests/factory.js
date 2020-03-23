import {BlockRequest} from './blockRequest'

export class BlockRequestsFactory {
  static blockRequest = ({blockId, previousHash}) =>
    new BlockRequest({blockId, previousHash})
}
