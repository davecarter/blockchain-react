import {config} from './config'
import {BtcUseCasesFactory} from './btc/useCases/factory'

const useCases = {
  get_btc_current_price_use_case: BtcUseCasesFactory.getCurrentBtcPriceUseCase({
    config
  })
}

export const domain = {
  get: key => {
    return useCases[key]
  }
}
