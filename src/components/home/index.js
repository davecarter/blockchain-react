import React from 'react'

import {BtcCurrentPrice} from '../btcCurrentPrice'
import {Ledger} from '../ledger'

const HomePage = () => (
  <>
    <header className="homePage-Header">
      <h1 className="homePage-HeaderTitle">Blockchain based project</h1>
      <a
        className="homePage-HeaderAuthor"
        title="developed by David G"
        href="https://twitter.com/@d4vecarter"
      >
        @d4vecarter
      </a>
    </header>
    <BtcCurrentPrice />
    <Ledger />
  </>
)

export {HomePage}
