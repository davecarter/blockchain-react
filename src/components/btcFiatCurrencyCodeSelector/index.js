import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

const BtcFiatCurrencyCodeSelector = ({onChange, currentCurrencyCode}) => {
  const baseClass = 'btcFiatCurrencyCodeSelector'
  const fiatCurrencyCodes = ['EUR', 'USD', 'GBP', 'ARS']
  const [isVisible, setIsVisible] = useState(false)
  const _handleClick = currentCurrencyCode => {
    onChange(currentCurrencyCode)
  }

  useEffect(() => setIsVisible(false), [currentCurrencyCode])

  return (
    <div className={baseClass}>
      <span className={`${baseClass}-currentFiat${currentCurrencyCode}`}>
        {currentCurrencyCode}
      </span>
      <div
        className={`${baseClass}-dropDownContainer`}
        onClick={() => setIsVisible(true)}
      >
        <svg
          className={`${baseClass}-chevron`}
          width="18"
          height="8"
          viewBox="0 0 22 11"
        >
          <path d="M21.7,1L11,11L0.3,1" />
        </svg>
        {isVisible && (
          <ul className={`${baseClass}-dropDownSelector`}>
            {fiatCurrencyCodes.map(item => (
              <li
                key={baseClass + item}
                className={`${baseClass}-dropDownItem`}
                onClick={() => _handleClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

BtcFiatCurrencyCodeSelector.propTypes = {
  onChange: PropTypes.func,
  currentCurrencyCode: PropTypes.string
}

export {BtcFiatCurrencyCodeSelector}
