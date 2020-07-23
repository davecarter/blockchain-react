import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Block = ({
  clearUserData,
  creationDate,
  difficulty,
  handleUserData,
  hash = '0',
  id,
  minedStatus,
  mineValidHash,
  nonce,
  previousHash,
  userData
}) => {
  const baseClass = 'block'

  const mineStatusClass = cx(baseClass, {
    [`${baseClass}--mined`]: minedStatus
  })

  const mineStatusClassLabelContainer = cx(`${baseClass}-labelContainer`, {
    [`${baseClass}-labelContainer--mined`]: minedStatus
  })

  return (
    <section className={mineStatusClass}>
      <h3 data-testid="id" className={`${baseClass}-heading`}>
        BLOCK #{id}
      </h3>
      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Creation date:</span>
        <span data-testid="creationDate" className={`${baseClass}-labelData`}>
          {creationDate}
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
        {minedStatus ? (
          <input
            data-testid="minedBlockData"
            className={`${baseClass}-disabledData`}
            type="text"
            value={userData}
            disabled
            readOnly
          />
        ) : (
          <textarea
            id="blockData"
            placeholder="type your data"
            className={`${baseClass}-data`}
            value={userData}
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
          {hash}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Nonce:</span>
        <span data-testid="nonce" className={`${baseClass}-labelData`}>
          {nonce}
        </span>
      </div>

      <div className={mineStatusClassLabelContainer}>
        <span className={`${baseClass}-labelColumn`}>Difficulty:</span>
        <span data-testid="difficulty" className={`${baseClass}-labelData`}>
          {difficulty}
        </span>
      </div>

      {!minedStatus && (
        <button className={`${baseClass}-button`} onClick={mineValidHash}>
          Mine Block!
        </button>
      )}
    </section>
  )
}

Block.propTypes = {
  clearUserData: PropTypes.func,
  creationDate: PropTypes.string,
  difficulty: PropTypes.string,
  handleUserData: PropTypes.func,
  hash: PropTypes.string,
  id: PropTypes.number,
  minedStatus: PropTypes.bool,
  mineValidHash: PropTypes.func,
  nonce: PropTypes.number,
  previousHash: PropTypes.string,
  userData: PropTypes.string
}

export {Block}
