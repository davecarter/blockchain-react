export class GetCurrentBtcPriceUseCase {
  constructor({repository, fiatCurrencyCodeValueObjectFactory}) {
    this._repository = repository
    this._fiatCurrencyCodeValueObjectFactory = fiatCurrencyCodeValueObjectFactory
  }

  async execute({fiatCurrencyCode}) {
    const btcCryptoCurrencyValueObject = await this._repository.getCurrentPrice(
      {
        fiatCurrencyCodeVO: this._fiatCurrencyCodeValueObjectFactory({
          fiatCurrencyCode
        })
      }
    )

    return btcCryptoCurrencyValueObject.toJSON()
  }
}
