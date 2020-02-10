import React, {useEffect, useState} from 'react'
import {domain} from '../../domain'

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
      <h2 className={`${baseClass}-heading`}>Bitcoin current Price</h2>
      <h3 className={`${baseClass}-price`}>{eur}</h3>
      <h3 className={`${baseClass}-price`}>{usd}</h3>
    </div>
  )
}
