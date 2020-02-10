export class GetCurrentBtcPriceUseCase {
  constructor({repository, getCurrencyBtcRequestFactory}) {
    this._repository = repository
    this._getCurrencyBtcRequestFactory = getCurrencyBtcRequestFactory
  }

  async execute({currency}) {
    const {time, disclaimer, eur} = await this._repository.getCurrentPrice({
      getCurrencyBtcRequest: await this._getCurrencyBtcRequestFactory({
        currency
      })
    })

    return {
      time,
      disclaimer,
      eur
    }
  }
}
