/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {Block} from '../block'
import {domain} from '../../domain/index'

const GenesisBlock = () => {
  const [genesisBlock, setGenesisBlock] = useState('')
  const blockData = {
    name: 'David',
    address: '235253464567547635'
  }

  useEffect(() => {
    domain
      .get('set_genesis_block_use_case')
      .execute({blockData})
      .then(data => setGenesisBlock(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <span>Genesis BlockId: {genesisBlock}</span>
}

export {GenesisBlock}
