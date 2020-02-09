export class FromApiResponseToBtcEntityMapper {
  async map(apiResponse) {
    return {
      time: apiResponse.time.updated,
      disclaimer: apiResponse.disclaimer,
      eur: apiResponse.bpi?.EUR?.rate
    }
  }
}
