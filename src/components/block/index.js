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

  const [currentId, setCurrentId] = useState('0')
  const [currentPreviousHash, setCurrentPreviousHash] = useState('')
  const [currentCreationDate, setCurrentCreationDate] = useState('')
  const [currentHash, setCurrentHash] = useState('')
  const [currentDifficulty, setCurrentDifficulty] = useState('')
  const [currentUserData, setCurrentUserData] = useState('')
  const [currentNonce, setCurrentNonce] = useState('')

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mined`]: isMined
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
    return creationDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleMineBlock = async () => {
    const blockData = {
      id: currentId,
      previousHash,
      userData: currentUserData,
      creationDate: setBlockCreationDate(),
      difficulty,
      nonce: currentNonce,
      hash: currentHash
    }

    await domain.get('mine_block_data_use_case').execute({blockData})
  }

  return (
    <div className={mineStatusClass}>
      <table>
        <thead>
          <tr>
            <th colSpan="2" className={`${baseClass}-heading`}>
              BLOCK #{isMined ? id : currentId}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Creation date:</td>
            <td className={`${baseClass}-labelData`}>
              {isMined ? creationDate : currentCreationDate}
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Previous hash:</td>
            <td className={`${baseClass}-labelData`}>
              {isMined ? previousHash : currentPreviousHash}
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>
              <label htmlFor="blockData">Block data:</label>
            </td>
            <td>
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
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Block hash:</td>
            <td className={`${baseClass}-labelData`}>
              {isMined ? hash : currentHash}
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Nonce:</td>
            <td className={`${baseClass}-labelData`}>
              {isMined ? nonce : currentNonce}
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Difficulty:</td>
            <td className={`${baseClass}-labelData`}>
              {isMined ? difficulty : currentDifficulty}
            </td>
          </tr>
        </tbody>
      </table>

      {!isMined && (
        <button className={`${baseClass}-button`} onClick={handleMineBlock}>
          Mine Block!
        </button>
      )}
    </div>
  )
}

Block.defaultProps = {
  isMined: false
}

Block.propTypes = {
  id: PropTypes.string,
  previousHash: PropTypes.string,
  creationDate: PropTypes.string,
  userData: PropTypes.string,
  difficulty: PropTypes.string,
  nonce: PropTypes.number,
  hash: PropTypes.string,
  isMined: PropTypes.bool
}

export {Block}
