import React, {useEffect, useState} from 'react'
import {domain} from '../../domain/index'

import {BlockChainList} from '../blockChainList'
import {Block} from '../block'

const Ledger = () => {
  const [blockChainData, setBlockChainData] = useState([])
  const [lastMinedBlock, setLastMinedBlock] = useState({
    lastId: 0,
    lastPreviousHash: '',
    lastDifficulty: '',
    lastNonce: 0
  })

  useEffect(() => {
    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        setBlockChainData(data)
      })
  }, [])

  useEffect(() => {
    if (blockChainData.length > 0) {
      const {id, previousHash, difficulty, nonce} = blockChainData[
        blockChainData.length - 1
      ]
      setLastMinedBlock({
        lastId: id,
        lastPreviousHash: previousHash,
        lastDifficulty: difficulty,
        lastNonce: nonce
      })
    }
  }, [blockChainData])

  const {lastId, lastPreviousHash, lastDifficulty, lastNonce} = lastMinedBlock
  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Ledger Blockchain list</h3>
      <Block
        id={lastId}
        previousHash={lastPreviousHash}
        difficulty={lastDifficulty}
        nonce={lastNonce}
        minedStatus={false}
      />
      <BlockChainList blockChainList={blockChainData} />
    </div>
  )
}

export {Ledger}
