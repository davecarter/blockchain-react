import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {SHA256} from 'crypto-js'

const Block = ({
  blockId,
  previousHash,
  blockData,
  creationDate,
  currentDifficulty,
  hash
}) => {
  const baseClass = 'block'
  const [currentNonce, setCurrentNonce] = useState(0)
  const [isMining, setIsMining] = useState(false)

  let nonce = 24
  let currentHash = '0'

  const isMiningClass = cx(baseClass, {
    [`${baseClass}--mining`]: isMining
  })

  const handleMining = () => {
    setIsMining(true)
    setTimeout(mineValidHash, 1000)
  }

  const mineValidHash = () => {
    while (!currentHash.startsWith(currentDifficulty)) {
      nonce++
      currentHash = createHash()
    }
    setCurrentNonce(nonce)
    setTimeout(setIsMining(false), 1000)
  }

  const createHash = () =>
    SHA256(blockId + creationDate + blockData + nonce).toString()

  return (
    <div className={isMiningClass}>
      <table>
        <thead>
          <tr>
            <th className={`${baseClass}-heading`}>BLOCK #{blockId}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Creation date:</td>
            <td className={`${baseClass}-labelData`}>{creationDate}</td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Previous hash:</td>
            <td className={`${baseClass}-labelData`}>{previousHash}</td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>
              <label htmlFor="blockData">Block data:</label>
            </td>
            <td>
              <textarea
                id="blockData"
                className={`${baseClass}-data`}
                value={blockData}
              />
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Current hash:</td>
            <td className={`${baseClass}-labelData`}>{hash}</td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Nonce:</td>
            <td className={`${baseClass}-labelData`}>{currentNonce}</td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Current difficulty:</td>
            <td className={`${baseClass}-labelData`}>{currentDifficulty}</td>
          </tr>
        </tbody>
      </table>

      <button className={`${baseClass}-button`} onClick={handleMining}>
        Mine Block!
      </button>
    </div>
  )
}

Block.propTypes = {
  blockId: PropTypes.number,
  previousHash: PropTypes.string,
  creationDate: PropTypes.number,
  blockData: PropTypes.string,
  currentDifficulty: PropTypes.string,
  hash: PropTypes.string
}

export {Block}
