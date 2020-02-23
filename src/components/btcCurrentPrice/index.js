import React, {useEffect, useState} from 'react'
import {domain} from '../../domain'
import {BtcCurrencyDisplay} from '../btcCurrencyDisplay'

export const BtcCurrentPrice = () => {
  const baseClass = 'btcCurrentPrice'
  const [eur, setEur] = useState('')
  const [usd, setUsd] = useState('')

  useEffect(() => {
    domain
      .get('get_btc_current_price_use_case')
      .execute({currency: 'EUR'})
      .then(BtcCurrentPriceResult => {
        const {eur, usd} = BtcCurrentPriceResult
        setEur(eur)
        setUsd(usd)
      })
      .catch(BtcCurrentPriceError =>
        window.console.error('error', BtcCurrentPriceError)
      )
  }, [eur])

  return (
    <div className={baseClass}>
      <BtcCurrencyDisplay eur={eur} usd={usd} />
    </div>
  )
}
