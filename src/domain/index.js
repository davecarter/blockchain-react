import {config} from './config'
import {SHA256} from 'crypto-js'
import axios from 'axios'

import {BtcUseCasesFactory} from './btc/useCases/factory'
import {BlockUseCasesFactory} from './blockchain/useCases/factory'

const useCases = {
  get_btc_current_price_use_case: BtcUseCasesFactory.getCurrentBtcPriceUseCase({
    config,
    fetcher: axios
  }),
  get_blockchain_use_case: BlockUseCasesFactory.getBlockChainUseCase({
    config,
    fetcher: axios
  }),
  get_mined_block_data_use_case: BlockUseCasesFactory.getMinedBlockDataUseCase({
    config,
    SHA256
  })
}

export const domain = {
  get: key => {
    return useCases[key]
  }
}
