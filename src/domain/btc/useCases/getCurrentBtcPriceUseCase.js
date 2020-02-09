export class GetCurrentBtcPriceUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  async execute({currency}) {
    const {time, disclaimer, eur} = await this._repository.getCurrentPrice({
      currency
    })
    return {
      time,
      disclaimer,
      eur
    }
  }
}
