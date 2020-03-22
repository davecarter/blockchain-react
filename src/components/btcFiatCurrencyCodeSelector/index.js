import React, {useEffect, useState} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const BtcFiatCurrencyCodeSelector = ({onChange, currentCurrencyCode}) => {
  const baseClass = 'btcFiatCurrencyCodeSelector'
  const fiatCurrencyCodes = ['EUR', 'USD', 'GBP', 'ARS']
  const [isVisible, setIsVisible] = useState(false)
  const _handleClick = currentCurrencyCode => {
    onChange(currentCurrencyCode)
  }

  useEffect(() => setIsVisible(false), [currentCurrencyCode])

  const chevronClass = cx(`${baseClass}-chevron`, {
    [`${baseClass}-chevron--inverted`]: isVisible
  })

  return (
    <div className={baseClass}>
      <span className={`${baseClass}-currentFiat${currentCurrencyCode}`}>
        {currentCurrencyCode}
      </span>
      <div
        className={`${baseClass}-dropDownContainer`}
        onClick={() => setIsVisible(!isVisible)}
      >
        <svg
          id="dropDownSelector"
          className={chevronClass}
          width="18"
          height="8"
          viewBox="0 0 22 11"
        >
          <path d="M21.7,1L11,11L0.3,1" />
        </svg>
        {isVisible && (
          <ul className={`${baseClass}-dropDownSelector`}>
            {fiatCurrencyCodes.map(item => {
              const activeItem = cx(`${baseClass}-dropDownItem`, {
                [`${baseClass}-dropDownItem--active`]:
                  currentCurrencyCode === item
              })
              return (
                <li
                  key={baseClass + item}
                  className={activeItem}
                  onClick={() => _handleClick(item)}
                >
                  {item}
                </li>
              )
            })}
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
