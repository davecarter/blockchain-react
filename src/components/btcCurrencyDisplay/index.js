import React from 'react'
import PropTypes from 'prop-types'

const BtcCurrencyDisplay = ({currentPriceValue, updated}) => {
  const baseClass = 'btcCurrencyDisplay'

  return (
    <div className={baseClass}>
      <h3 className={`${baseClass}-heading`}>
        Bitcoin <span className={`${baseClass}-code`}>BTC</span>
      </h3>
      <span className={`${baseClass}-valueContainer`}>
        <span className={`${baseClass}-priceEUR`}>{currentPriceValue}</span>
        <span className={`${baseClass}-updated`}>{updated}</span>
      </span>
    </div>
  )
}

BtcCurrencyDisplay.propTypes = {
  currentPriceValue: PropTypes.string,
  updated: PropTypes.string
}

export {BtcCurrencyDisplay}
