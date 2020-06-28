/* eslint-disable no-unused-vars */
import React from 'react'
import {Block} from '../block'

const BlockChainList = ({blockChainList = []}) => {
  return blockChainList?.map(blocklist => {
    const {
      id,
      previousHash,
      userData,
      creationDate,
      difficulty,
      hash,
      isMined,
      nonce
    } = blocklist

    return (
      <div key={id}>
        <Block
          id={id}
          previousHash={previousHash}
          userData={userData}
          creationDate={creationDate}
          difficulty={difficulty}
          nonce={nonce}
          hash={hash}
          isMined={isMined}
        />
      </div>
    )
  })
}

export {BlockChainList}
