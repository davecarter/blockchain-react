import React, {useEffect, useState} from 'react'
import {domain} from '../../domain'
import {BtcCurrencyDisplay} from '../btcCurrencyDisplay'
import {BtcFiatCurrencyCodeSelector} from '../btcFiatCurrencyCodeSelector'

export const BtcCurrentPrice = () => {
  const baseClass = 'btcCurrentPrice'
  const [currentPriceValue, setCurrentPriceValue] = useState('')
  const [fiatCurrencyCode, setFiatCurrencyCode] = useState('EUR')
  const [updated, setUpdated] = useState('')

  useEffect(() => {
    domain
      .get('get_btc_current_price_use_case')
      .execute({fiatCurrencyCode})
      .then(BtcCurrentPriceResult => {
        const {value, fiatCurrencyCode, updated} = BtcCurrentPriceResult
        setCurrentPriceValue(value)
        setFiatCurrencyCode(fiatCurrencyCode)
        setUpdated(updated)
      })
      .catch(BtcCurrentPriceError =>
        window.console.error('error', BtcCurrentPriceError)
      )
  }, [fiatCurrencyCode])

  return (
    <div className={baseClass}>
      <BtcCurrencyDisplay
        currentPriceValue={currentPriceValue}
        updated={updated}
      />
      <BtcFiatCurrencyCodeSelector
        onChange={setFiatCurrencyCode}
        currentCurrencyCode={fiatCurrencyCode}
      />
    </div>
  )
}
