/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import {domain} from '../../domain/index'
import {config} from '../../domain/config'
import {Block} from '../block'

const BlockChainList = () => {
  const [blockChainData, setBlockChainData] = useState([])
  const [genesisBlock, setGenesisBlock] = useState('')

  const genesisBlockData = config.GENESIS_BLOCK

  useEffect(() => {
    const creationDate = new Date()
    const localeDate = creationDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const blockData = {
      ...genesisBlockData,
      creationDate: localeDate
    }

    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        setBlockChainData(data)
        if (data.length === 0) {
          domain
            .get('set_genesis_block_use_case')
            .execute({blockData})
            .then(data => setGenesisBlock(data))
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return blockChainData.map(block => {
    const {
      blockId,
      previousHash,
      blockData,
      creationDate,
      currentDifficulty,
      hash
    } = block.blockData

    return (
      <div key={blockId}>
        <Block
          blockId={blockId}
          previousHash={previousHash}
          blockData={blockData}
          creationDate={creationDate}
          currentDifficulty={currentDifficulty}
          hash={hash}
        />
      </div>
    )
  })
}

export {BlockChainList}
