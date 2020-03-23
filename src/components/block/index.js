import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {domain} from '../../domain/index'

const Block = ({blockNumber, previousHash}) => {
  const baseClass = 'block'
  const [blockId, setBlockId] = useState(0)
  const [creationDate, setCreationDate] = useState(0)
  const [blockData, setBlockData] = useState('')
  const [currentHash, setCurrentHash] = useState(0)

  useEffect(() => {
    const {blockId, creationDate, blockData, currentHash} = domain
      .get('get_last_blockchain_block')
      .execute({blockNumber, previousHash})
    setBlockId(blockId)
    setCreationDate(creationDate)
    setBlockData(blockData)
    setCurrentHash(currentHash)
  }, [blockNumber, previousHash])

  const handleBlockData = evt => setBlockData(evt.target.value)

  return (
    <div className={baseClass}>
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
                onChange={handleBlockData}
              />
            </td>
          </tr>
          <tr>
            <td className={`${baseClass}-labelColumn`}>Current hash:</td>
            <td className={`${baseClass}-labelData`}>{currentHash}</td>
          </tr>
        </tbody>
      </table>

      <button className={`${baseClass}-button`}>Mine Block!</button>
    </div>
  )
}

Block.propTypes = {
  blockNumber: PropTypes.number,
  previousHash: PropTypes.string
}

Block.defaultProps = {
  blockNumber: 0,
  previousHash: 'Genesis'
}

export {Block}
