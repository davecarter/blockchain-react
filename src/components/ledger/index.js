import React, {useEffect, useState} from 'react'

import {config} from '../../domain/config'
import {domain} from '../../domain/index'

import {BlockChainList} from '../blockChainList'
import {Block} from '../block'

const Ledger = () => {
  const [blockChainList, setBlockChainList] = useState([])

  const [currentId, setCurrentId] = useState('0')
  const [difficulty, setDifficulty] = useState('0')
  const [currentNonce, setCurrentNonce] = useState(20)
  const [lastBlockData, setLastBlockData] = useState({})

  useEffect(() => {
    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        if (data.length !== 0) {
          setBlockChainList(data)
          setCurrentNonce(config.GENESIS_BLOCK.nonce)
          setDifficulty(config.GENESIS_BLOCK.difficulty)
          getPreviousBlock(data)
          const normalizeId = () =>
            blockChainList.length.toString().padStart(6, '000000')
          setCurrentId(normalizeId())
        } else {
          setBlockChainList([config.GENESIS_BLOCK])
        }
      })
  }, [blockChainList.length])

  const getPreviousBlock = blocklist => {
    setLastBlockData(blocklist[blocklist.length - 1])
  }

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Ledger Blockchain list</h3>
      <Block
        id={currentId}
        previousHash={lastBlockData.hash}
        difficulty={difficulty}
        nonce={currentNonce}
        isMined={false}
      />
      <BlockChainList blockChainList={blockChainList} />
    </div>
  )
}

export {Ledger}
