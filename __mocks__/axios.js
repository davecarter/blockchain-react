/* eslint-disable no-undef */
export default {
  get: jest.fn(url => {
    // Mocked response to Axios get method API calls to a specific URL
    if (url === 'https://api.coindesk.com/v1/bpi/currentprice/EUR.json') {
      return Promise.resolve({
        data: {
          bpi: {
            EUR: {
              rate_float: 8149.3056
            }
          },
          time: {
            updatedISO: '2020-06-26T14:08:00+00:00'
          },
          fiatCurrencyCode: 'EUR',
          updated: '2020-06-26T14:08:00+00:00'
        }
      })
    }
  })
}
