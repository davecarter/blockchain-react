import {config} from './config'
import {SHA256} from 'crypto-js'

import {BtcUseCasesFactory} from './btc/useCases/factory'
import {BlockUseCasesFactory} from './blockchain/useCases/factory'

const useCases = {
  get_btc_current_price_use_case: BtcUseCasesFactory.getCurrentBtcPriceUseCase({
    config
  }),
  get_blockchain_use_case: BlockUseCasesFactory.getBlockChainUseCase({config}),
  set_block_use_case: BlockUseCasesFactory.setBlockUseCase({config}),
  mine_block_data_use_case: BlockUseCasesFactory.mineBlockDataUseCase({
    config,
    SHA256
  })
}

export const domain = {
  get: key => {
    return useCases[key]
  }
}
