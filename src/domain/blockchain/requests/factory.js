import {BlockRequest} from './blockRequest'

export class BlockRequestsFactory {
  static blockRequest = ({blockData}) => new BlockRequest({blockData})
}
