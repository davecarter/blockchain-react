import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Block = ({
  blockId,
  previousHash,
  blockData,
  creationDate,
  currentDifficulty,
  currentNonce,
  hash,
  mine,
  isMined
}) => {
  const baseClass = 'block'
  const [isMining, setIsMining] = useState(false)
  const [userData, setUserDate] = useState('')

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mining`]: isMining,
    [`${baseClass}--mined`]: isMined
  })

  const handleChange = evt => setUserDate(evt.target.value)

  return (
    <div className={mineStatusClass}>
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
              {isMined ? (
                <input
                  className={`${baseClass}-disabledData`}
                  type="text"
                  value={blockData}
                  disabled
                />
              ) : (
                <textarea
                  id="blockData"
                  placeholder="type your data"
                  className={`${baseClass}-data`}
                  value={userData}
                  onChange={handleChange}
                />
              )}
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

      {!isMined && (
        <button className={`${baseClass}-button`} onClick={mine}>
          Mine Block!
        </button>
      )}
    </div>
  )
}

Block.propTypes = {
  blockId: PropTypes.number,
  previousHash: PropTypes.string,
  creationDate: PropTypes.string,
  blockData: PropTypes.string,
  currentDifficulty: PropTypes.string,
  currentNonce: PropTypes.number,
  hash: PropTypes.string,
  mine: PropTypes.func,
  isMined: PropTypes.bool
}

export {Block}
