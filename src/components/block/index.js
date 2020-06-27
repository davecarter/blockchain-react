import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {SHA256} from 'crypto-js'
import {domain} from '../../domain/index'

const Block = ({
  id,
  creationDate,
  previousHash,
  userData,
  hash,
  nonce,
  difficulty,
  isMined
}) => {
  const baseClass = 'block'

  const [currentId, setCurrentId] = useState(0)
  const [currentPreviousHash, setCurrentPreviousHash] = useState('')
  const [currentCreationDate, setCurrentCreationDate] = useState('')
  const [currentHash, setCurrentHash] = useState('')
  const [currentDifficulty, setCurrentDifficulty] = useState('')
  const [currentUserData, setCurrentUserData] = useState('')
  const [currentNonce, setCurrentNonce] = useState('')

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mined`]: isMined
  })

  const mineStatusClassLabelContainer = cx(`${baseClass}-labelContainer`, {
    [`${baseClass}-labelContainer--mined`]: isMined
  })

  useEffect(() => {
    if (!isMined) {
      setCurrentDifficulty(difficulty)
      setCurrentPreviousHash(previousHash)
      setCurrentCreationDate(setBlockCreationDate())
      setCurrentId(id)
      setCurrentNonce(nonce)
      setCurrentHash(SHA256(id + currentUserData + nonce).toString())
    }
  }, [currentUserData, difficulty, hash, id, isMined, nonce, previousHash])

  const handleUserData = evt => setCurrentUserData(evt.target.value)

  const setBlockCreationDate = () => {
    const creationDate = new Date()
    return creationDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleSetBlock = async () => {
    const blockData = {
      id: currentId,
      previousHash,
      userData: currentUserData,
      creationDate: setBlockCreationDate(),
      difficulty,
      nonce: currentNonce,
      hash: currentHash,
      isMined: true
    }

    await domain.get('set_block_use_case').execute({blockData})
  }

  return (
    <section className={mineStatusClass}>
      <h3 className={`${baseClass}-heading`}>
        BLOCK #{isMined ? id : currentId}
      </h3>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Creation date:</span>
        <span className={`${baseClass}-labelData`}>
          {isMined ? creationDate : currentCreationDate}
        </span>
      </div>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Previous hash:</span>
        <span
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {isMined ? previousHash : currentPreviousHash}
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
          />
        )}
      </div>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Block hash:</span>
        <span
          className={`${baseClass}-labelData ${baseClass}-labelData--isHash`}
        >
          {isMined ? hash : currentHash}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Nonce:</span>
        <span className={`${baseClass}-labelData`}>
          {isMined ? nonce : currentNonce}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Difficulty:</span>
        <span className={`${baseClass}-labelData`}>
          {isMined ? difficulty : currentDifficulty}
        </span>
      </div>

      {!isMined && (
        <button className={`${baseClass}-button`} onClick={handleSetBlock}>
          Mine Block!
        </button>
      )}
    </section>
  )
}

Block.defaultProps = {
  isMined: false
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
