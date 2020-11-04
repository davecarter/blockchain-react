/* eslint-disable no-undef */
import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {Block} from '../components/block'

const expect = global.expect

test('Given some props to a MINED Block. it Renders its contents', async () => {
  const props = {
    id: 12,
    difficulty: '0000',
    isMined: false,
    nonce: 5045,
    previousHash:
      '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2'
  }

  const {getByTestId} = render(<Block {...props} />)
  expect(getByTestId('id')).toHaveTextContent('BLOCK #12')
  expect(getByTestId('previousHash')).toHaveTextContent(
    '0000e0ea2b96d4c12f4421711117f981547e9dfb484f987e7491543dd324b1e2'
  )

  expect(getByTestId('nonce')).toHaveTextContent('5045')
  expect(getByTestId('difficulty')).toHaveTextContent('0000')
})
