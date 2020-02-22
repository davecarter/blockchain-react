import React, {useState} from 'react'
import PropTypes from 'prop-types'

const BtcCurrencyDisplay = ({eur, usd}) => {
  const baseClass = 'btcCurrencyDisplay'
  const [defaultDisplayedCurrency, setDefaultDisplayedCurrency] = useState(
    'EUR'
  )
  const handleDisplayedCurrency = () => {
    defaultDisplayedCurrency === 'EUR'
      ? setDefaultDisplayedCurrency('USD')
      : setDefaultDisplayedCurrency('EUR')
  }

  return (
    <>
      <span className={`${baseClass}-heading`}>Bitcoin current Price:</span>
      <span
        onClick={handleDisplayedCurrency}
        className={`${baseClass}-valueContainer`}
      >
        {defaultDisplayedCurrency === 'EUR' ? (
          <span className={`${baseClass}-priceEUR`}>{eur}</span>
        ) : (
          <span className={`${baseClass}-priceUSD`}>{usd}</span>
        )}
      </span>
    </>
  )
}

BtcCurrencyDisplay.propTypes = {
  eur: PropTypes.string,
  usd: PropTypes.string
}

export {BtcCurrencyDisplay}
