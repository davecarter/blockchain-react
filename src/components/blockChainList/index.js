/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {domain} from '../../domain/index'
import {config} from '../../domain/config'
import {Block} from '../block'

import {SHA256} from 'crypto-js'

const BlockChainList = () => {
  const [blockChainData, setBlockChainData] = useState([])
  const [lastBlockData, setLastBlockData] = useState({})
  const [currentNonce, setCurrentNonce] = useState(0)
  const nonce = config.GENESIS_BLOCK.nonce

  useEffect(() => {
    const genesisBlockData = config.GENESIS_BLOCK
    const creationDate = new Date()
    const localeDate = creationDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        setBlockChainData(data)
        setLastBlockData(blockChainData.length - 1)
        if (data.length === 0) {
          // eslint-disable-next-line no-debugger
          debugger
          const blockData = {
            ...genesisBlockData,
            creationDate: localeDate
          }

          domain
            .get('set_block_use_case')
            .execute({blockData})
            .then(data => data)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleMineBlock = () => {
    console.log('BLOCKCHAINDATA', blockChainData)
    // while (!currentHash.startsWith(currentDifficulty)) {
    //   nonce++
    //   currentHash = createHash()
    // }
    // setCurrentNonce(nonce)
    // setTimeout(setIsMining(false), 1000)

    // const createHash = () =>
    //   SHA256(blockId + creationDate + blockData + nonce).toString()
  }

  return blockChainData.map(blocklist => {
    // eslint-disable-next-line no-debugger
    debugger
    const {
      blockId,
      previousHash,
      blockData,
      creationDate,
      currentDifficulty,
      hash
    } = blocklist.block

    return (
      <div key={blockId}>
        <Block
          blockId={blockId}
          previousHash={previousHash}
          blockData={blockData}
          creationDate={creationDate}
          currentDifficulty={currentDifficulty}
          currentNonce={currentNonce}
          hash={hash}
          mine={handleMineBlock}
        />
      </div>
    )
  })
}

export {BlockChainList}
