import getBlockChainUseCaseResponse from './fixtures/getBlockChainUseCaseResponse.json'
import {domain} from '../domain'
const expect = global.expect

test('Given an array of Blocks should retrieve the full Blockchain', async () => {
  const useCaseResponse = await domain.get('get_blockchain_use_case').execute()

  expect(useCaseResponse).toEqual(getBlockChainUseCaseResponse)
})
