import {domain} from '../domain'
import responseJSON from './fixtures/getBlockChainUseCaseResponse.json'
const expect = global.expect

test('Given an array of Blocks it will gather the full Blockchain', async () => {
  const useCaseResponse = await domain.get('get_blockchain_use_case').execute()
  expect(useCaseResponse).toStrictEqual(responseJSON)
})
