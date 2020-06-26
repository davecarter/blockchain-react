/* eslint-disable no-undef */
import getCurrentBitcoinPriceUseCaseResponse from './fixtures/getCurrentBitcoinPriceUseCaseResponse.json'
import {domain} from '../domain'

test('Given a contry code should return the current Bitcoin price converted to Euro', async () => {
  const useCaseResponse = await domain
    .get('get_btc_current_price_use_case')
    .execute({fiatCurrencyCode: 'EUR'})
    .then(response => response)

  expect(getCurrentBitcoinPriceUseCaseResponse).toStrictEqual(useCaseResponse)
})
