export class GetCurrentBtcPriceUseCase {
  constructor({repository, getCurrencyBtcRequestFactory}) {
    this._repository = repository
    this._getCurrencyBtcRequestFactory = getCurrencyBtcRequestFactory
  }

  async execute({currency}) {
    const btcCurrencyEntity = await this._repository.getCurrentPrice({
      getCurrencyBtcRequest: await this._getCurrencyBtcRequestFactory({
        currency
      })
    })

    return btcCurrencyEntity.toJSON()
  }
}
