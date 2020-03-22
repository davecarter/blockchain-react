import {GetLastBlockChainBlock} from './GetLastBlockChainBlock'
import {BlockValueObjectsFactory} from '../valueObjects/factory'

export class BlockUseCasesFactory {
  static getLastBlockChainBlock = ({config}) =>
    new GetLastBlockChainBlock({
      config,
      blockValueObjectFactory: BlockValueObjectsFactory.blockValueObject
    })
}
