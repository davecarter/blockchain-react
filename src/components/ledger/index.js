import React, {useEffect, useState, useReducer} from 'react'
import {domain} from '../../domain/index'

import {BlockChainList} from '../blockChainList'
import {Block} from '../block'

const Ledger = () => {
  const [blockChainData, setBlockChainData] = useState([])
  const [previousHash, setPreviousHash] = useState('')
  const [creationDate, setCreationDate] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [, setMinedBlockData] = useState({})

  const ACTIONS = {
    UPDATE_USER_DATA: 'update_user_data',
    UPDATE_HASH: 'update_hash',
    UPDATE_CREATION_DATE: 'update_creation_date',
    UPDATE_NONCE: 'update_nonce',
    UPDATE_MINED_STATUS: 'update_mined_status'
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_USER_DATA:
        return {
          ...state,
          currentUserData: action.payload
        }

      case ACTIONS.UPDATE_CREATION_DATE:
        return {
          ...state,
          currentCreationDate: action.payload
        }

      case ACTIONS.UPDATE_HASH:
        return {
          ...state,
          currentHash: action.payload
        }

      case ACTIONS.UPDATE_NONCE:
        return {
          ...state,
          currentNonce: action.payload
        }

      case ACTIONS.UPDATE_MINED_STATUS:
        return {
          ...state,
          currentMinedStatus: action.payload
        }

      default:
        return {
          ...state,
          currentUserData,
          currentCreationDate,
          currentHash,
          currentNonce,
          currentMinedStatus
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    currentHash: 'Type to cypher your data',
    currentCreationDate: creationDate,
    currentMinedStatus: false,
    currentNonce: '0'
  })

  const {
    currentHash,
    currentNonce,
    currentUserData,
    currentCreationDate,
    currentMinedStatus
  } = state

  useEffect(() => setBlockCreationDate())

  useEffect(() => {
    domain
      .get('get_blockchain_use_case')
      .execute()
      .then(data => {
        setBlockChainData(data)
        setPreviousHash(data[0].hash)
        setDifficulty(data[0].difficulty)
      })
  }, [])

  const updateCurrentBlock = () => {
    dispatch({type: ACTIONS.UPDATE_NONCE, payload: nonce})
    dispatch({type: ACTIONS.UPDATE_HASH, payload: hash})
    dispatch({type: ACTIONS.UPDATE_MINED_STATUS, payload: true})
  }

  const handleMiner = async () => {
    updateCurrentBlock()
    const minedBlockData = await domain
      .get('get_mined_block_data_use_case')
      .execute({id: '0', userData: currentUserData, creationDate, previousHash})

    setMinedBlockData(minedBlockData)
  }

  const clearUserData = () => {
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: ''})
  }

  const handleUserData = evt => {
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: evt.target.value})
  }

  const setBlockCreationDate = () => {
    const creationDate = new Date()
    setCreationDate(
      creationDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    )
  }

  return (
    <div>
      <h3 style={{textAlign: 'center'}}>Ledger Blockchain list</h3>
      <Block
        clearUserData={clearUserData}
        creationDate={creationDate}
        handleUserData={handleUserData}
        userData={currentUserData}
        id={0}
        hash={currentHash}
        previousHash={previousHash}
        difficulty={difficulty}
        nonce={currentNonce}
        minedStatus={currentMinedStatus}
        mineValidHash={handleMiner}
      />
      <BlockChainList blockChainList={blockChainData} />
    </div>
  )
}

export {Ledger}
