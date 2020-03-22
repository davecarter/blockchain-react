import {config} from './config'
import {BtcUseCasesFactory} from './btc/useCases/factory'
import {BlockUseCasesFactory} from './block/useCases/factory'

const useCases = {
  get_btc_current_price_use_case: BtcUseCasesFactory.getCurrentBtcPriceUseCase({
    config
  }),
  get_last_blockchain_block: BlockUseCasesFactory.getLastBlockChainBlock({
    config
  })
}

export const domain = {
  get: key => {
    return useCases[key]
  }
}
