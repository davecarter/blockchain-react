import React, {useEffect} from 'react'

import {config} from '../../domain/config'
import {domain} from '../../domain/index'

// import {BlockChainList} from '../blockChainList'
import {Block} from '../block'

const Ledger = () => {
  const {id, difficulty, hash, nonce, previousHash} = config.GENESIS_BLOCK

  useEffect(() => {
    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        return data
      })
  }, [])

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Ledger Blockchain list</h3>
      <Block
        id={id}
        previousHash={previousHash}
        hash={hash}
        difficulty={difficulty}
        nonce={nonce}
        isMined={false}
      />
      {/* <BlockChainList blockChainList={blockChainList} /> */}
    </div>
  )
}

export {Ledger}
