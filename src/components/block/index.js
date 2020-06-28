import React, {useReducer, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {SHA256} from 'crypto-js'
// import {domain} from '../../domain/index'

const Block = ({
  id,
  creationDate,
  previousHash,
  userData,
  hash,
  nonce,
  difficulty,
  isMined = true
}) => {
  const baseClass = 'block'

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mined`]: isMined
  })

  const mineStatusClassLabelContainer = cx(`${baseClass}-labelContainer`, {
    [`${baseClass}-labelContainer--mined`]: isMined
  })

  const ACTIONS = {
    UPDATE_USER_DATA: 'update_user_data',
    UPDATE_HASH: 'update_hash',
    UPDATE_CREATION_DATE: 'update_creation_date',
    UPDATE_NONCE: 'update_nonce'
  }

  const reducer = (state, action) => {
    window.console.log('ACTION', action)
    if (action.type === ACTIONS.UPDATE_USER_DATA) {
      return {
        ...state,
        currentUserData: action.payload
      }
    }

    if (action.type === ACTIONS.UPDATE_CREATION_DATE) {
      return {
        ...state,
        currentCreationDate: action.payload
      }
    }

    if (action.type === ACTIONS.UPDATE_HASH) {
      return {
        ...state,
        currentHash: action.payload
      }
    }

    if (action.type === ACTIONS.UPDATE_NONCE) {
      return {
        ...state,
        currentNonce: action.payload
      }
    }

    return {
      ...state,
      currentCreationDate,
      currentHash,
      minedStatus,
      nonce,
      currentUserData
    }
  }

  const setBlockCreationDate = () => {
    const creationDate = new Date()
    return creationDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const clearUserData = () =>
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: ''})

  const handleUserData = evt => {
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: evt.target.value})
    createHash()
  }

  const [state, dispatch] = useReducer(reducer, {
    currentHash: hash,
    currentCreationDate: creationDate,
    minedStatus: isMined,
    currentNonce: nonce,
    currentUserData: 'Insert data'
  })

  const {
    currentHash,
    minedStatus,
    currentNonce,
    currentUserData,
    currentCreationDate
  } = state

  useEffect(() => {
    dispatch({
      type: ACTIONS.UPDATE_CREATION_DATE,
      payload: setBlockCreationDate()
    })
  }, [ACTIONS.UPDATE_CREATION_DATE])

  const createHash = () => {
    const hash = SHA256(id + currentUserData + nonce).toString()
    dispatch({type: ACTIONS.UPDATE_HASH, payload: hash})
    return hash
  }

  const mineValidHash = () => {
    while (!hash.startsWith(difficulty)) {
      nonce++
      hash = createHash()
      console.log('HASH:', hash)
    }

    dispatch({type: ACTIONS.UPDATE_HASH, payload: hash})
    dispatch({type: ACTIONS.UPDATE_NONCE, payload: nonce})
  }

  return (
    <section className={mineStatusClass}>
      <h3 className={`${baseClass}-heading`}>BLOCK #{id}</h3>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Creation date:</span>
        <span className={`${baseClass}-labelData`}>{currentCreationDate}</span>
      </div>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Previous hash:</span>
        <span
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {previousHash}
        </span>
      </div>

      <div className={`${baseClass}-blockDataContainer`}>
        <label className={mineStatusClassLabelContainer} htmlFor="blockData">
          Block data:
        </label>
        {isMined ? (
          <input
            className={`${baseClass}-disabledData`}
            type="text"
            value={userData}
            disabled
          />
        ) : (
          <textarea
            id="blockData"
            placeholder="type your data"
            className={`${baseClass}-data`}
            value={currentUserData}
            onChange={handleUserData}
            onFocus={clearUserData}
          />
        )}
      </div>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Block hash:</span>
        <span
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {currentHash}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Nonce:</span>
        <span className={`${baseClass}-labelData`}>{currentNonce}</span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Difficulty:</span>
        <span className={`${baseClass}-labelData`}>{difficulty}</span>
      </div>

      {!isMined && (
        <button className={`${baseClass}-button`} onClick={mineValidHash}>
          Mine Block!
        </button>
      )}
    </section>
  )
}

Block.propTypes = {
  id: PropTypes.number,
  previousHash: PropTypes.string,
  creationDate: PropTypes.string,
  userData: PropTypes.string,
  difficulty: PropTypes.string,
  nonce: PropTypes.number,
  hash: PropTypes.string,
  isMined: PropTypes.bool
}

export {Block}
