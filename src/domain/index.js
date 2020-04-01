import {config} from './config'
import {BtcUseCasesFactory} from './btc/useCases/factory'
import {BlockUseCasesFactory} from './blockchain/useCases/factory'

const useCases = {
  get_btc_current_price_use_case: BtcUseCasesFactory.getCurrentBtcPriceUseCase({
    config
  }),
  get_blockchain_use_case: BlockUseCasesFactory.getBlockChainUseCase({
    config
  }),
  set_genesis_block_use_case: BlockUseCasesFactory.setGenesisBlockUseCase({
    config
  })
}

export const domain = {
  get: key => {
    return useCases[key]
  }
}
