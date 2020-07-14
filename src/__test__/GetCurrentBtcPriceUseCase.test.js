import getCurrentBitcoinPriceUseCaseResponse from './fixtures/getCurrentBitcoinPriceUseCaseResponse.json'
import {domain} from '../domain'

const expect = global.expect

test('Given a country code should return the current Bitcoin price converted to Euro', async () => {
  const useCaseResponse = await domain
    .get('get_btc_current_price_use_case')
    .execute({fiatCurrencyCode: 'EUR'})

  expect(getCurrentBitcoinPriceUseCaseResponse).toStrictEqual(useCaseResponse)
})
