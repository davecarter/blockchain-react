import {domain} from '../domain'
import {
  id,
  userData,
  creationDate,
  previousHash,
  validHash
} from './fixtures/GetMinedBlockDataUseCaseResponse'

const expect = global.expect

test('Given specific raw block data should return a mined block', async () => {
  const useCaseResponse = await domain
    .get('get_mined_block_data_use_case')
    .execute({id, userData, creationDate, previousHash})

  expect(useCaseResponse).toStrictEqual(validHash)
})
