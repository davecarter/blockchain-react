export class GetCurrencyBtcRequest {
  constructor({currency}) {
    this._currency = currency
  }

  currency() {
    return this._currency
  }
}
