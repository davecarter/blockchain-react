import React, {useReducer, useEffect} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {SHA256} from 'crypto-js'

const Block = ({
  id,
  creationDate,
  previousHash,
  userData,
  hash = '0',
  nonce,
  difficulty,
  minedStatus = true
}) => {
  const baseClass = 'block'

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

  const setBlockCreationDate = () => {
    const creationDate = new Date()
    return creationDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const clearUserData = () => {
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: ''})
  }

  const handleUserData = evt => {
    dispatch({type: ACTIONS.UPDATE_USER_DATA, payload: evt.target.value})
    createHash()
  }

  const [state, dispatch] = useReducer(reducer, {
    currentHash: hash,
    currentCreationDate: creationDate,
    currentMinedStatus: minedStatus,
    currentNonce: nonce
  })

  const {
    currentHash,
    currentNonce,
    currentUserData,
    currentCreationDate,
    currentMinedStatus
  } = state

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mined`]: currentMinedStatus
  })

  const mineStatusClassLabelContainer = cx(`${baseClass}-labelContainer`, {
    [`${baseClass}-labelContainer--mined`]: currentMinedStatus
  })

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
      window.console.log('HASH:', hash)
    }

    dispatch({type: ACTIONS.UPDATE_HASH, payload: hash})
    dispatch({type: ACTIONS.UPDATE_NONCE, payload: nonce})
    dispatch({type: ACTIONS.UPDATE_MINED_STATUS, payload: true})
  }

  return (
    <section className={mineStatusClass}>
      <h3 data-testid="id" className={`${baseClass}-heading`}>
        BLOCK #{id}
      </h3>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Creation date:</span>
        <span data-testid="creationDate" className={`${baseClass}-labelData`}>
          {currentMinedStatus ? creationDate : currentCreationDate}
        </span>
      </div>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Previous hash:</span>
        <span
          data-testid="previousHash"
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {previousHash}
        </span>
      </div>

      <div className={`${baseClass}-blockDataContainer`}>
        <label className={mineStatusClassLabelContainer} htmlFor="blockData">
          Block data:
        </label>
        {currentMinedStatus ? (
          <input
            data-testid="minedBlockData"
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
          data-testid="hash"
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {currentHash}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Nonce:</span>
        <span data-testid="nonce" className={`${baseClass}-labelData`}>
          {currentMinedStatus ? nonce : currentNonce}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Difficulty:</span>
        <span data-testid="difficulty" className={`${baseClass}-labelData`}>
          {difficulty}
        </span>
      </div>

      {!currentMinedStatus && (
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
  minedStatus: PropTypes.bool
}

export {Block}
