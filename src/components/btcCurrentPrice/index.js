import React, {useEffect, useState} from 'react'
import {domain} from '../../domain'

export const BtcCurrentPrice = () => {
  const baseClass = 'btcCurrentPrice'
  const [eur, setEur] = useState('')
  useEffect(() => {
    domain
      .get('get_btc_current_price_use_case')
      .execute({currency: 'EUR'})
      .then(response => {
        const {eur} = response
        setEur(eur)
      })
      .catch(error => window.console.error('error', error))
  }, [eur])

  const formatCurrency = currency =>
    `${currency.replace(',', '.').slice(0, 5)} €`

  return (
    <div className={baseClass}>
      <h2 className={`${baseClass}-heading`}>Bitcoin current Price</h2>
      <h3 className={`${baseClass}-price`}>{formatCurrency(eur)}</h3>
    </div>
  )
}
