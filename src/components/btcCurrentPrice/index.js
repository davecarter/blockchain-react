import React, {useEffect, useState} from 'react'
import {domain} from '../../domain'
import {BtcCurrencyDisplay} from '../btcCurrencyDisplay'

export const BtcCurrentPrice = () => {
  const baseClass = 'btcCurrentPrice'
  const [currentPriceValue, setCurrentPriceValue] = useState('')
  const [fiatCurrencyCode, setFiatCurrencyCode] = useState('')
  const [updated, setUpdated] = useState('')

  useEffect(() => {
    domain
      .get('get_btc_current_price_use_case')
      .execute({fiatCurrencyCode: 'EUR'})
      .then(BtcCurrentPriceResult => {
        const {value, fiatCurrencyCode, updated} = BtcCurrentPriceResult
        setCurrentPriceValue(value)
        setFiatCurrencyCode(fiatCurrencyCode)
        setUpdated(updated)
      })
      .catch(BtcCurrentPriceError =>
        window.console.error('error', BtcCurrentPriceError)
      )
  }, [])

  return (
    <div className={baseClass}>
      <BtcCurrencyDisplay
        currentPriceValue={currentPriceValue}
        fiatCurrencyCode={fiatCurrencyCode}
        updated={updated}
      />
    </div>
  )
}
