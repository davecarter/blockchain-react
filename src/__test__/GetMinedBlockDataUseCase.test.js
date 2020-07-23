import {domain} from '../domain'
import useCaseResponseFixture from './fixtures/useCaseResponseFixture.json'

const expect = global.expect

const id = '01'
const previousHash =
  '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2'
const creationDate = 'July 23, 2020'
const userData = 'This is a sample user data input'

test('Given specific raw block data should return a mined block', async () => {
  const useCaseResponse = await domain
    .get('get_mined_block_data_use_case')
    .execute({id, userData, creationDate, previousHash})

  expect(useCaseResponseFixture).toStrictEqual(useCaseResponse)
})
