import React from 'react'
import PropTypes from 'prop-types'

const BtcCurrencyDisplay = ({currentPriceValue, fiatCurrencyCode, updated}) => {
  const baseClass = 'btcCurrencyDisplay'

  return (
    <>
      <span className={`${baseClass}-heading`}>Bitcoin current Price:</span>
      <span className={`${baseClass}-valueContainer`}>
        <span className={`${baseClass}-priceEUR`}>{currentPriceValue}</span>
      </span>
      <p>{fiatCurrencyCode}</p>
      <span>{updated}</span>
    </>
  )
}

BtcCurrencyDisplay.propTypes = {
  currentPriceValue: PropTypes.string,
  fiatCurrencyCode: PropTypes.string,
  updated: PropTypes.string
}

export {BtcCurrencyDisplay}
