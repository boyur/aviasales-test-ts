import urls from 'configs/urls';

export default () => fetch(urls.exchangeRates)
  .then((response: any) => response.json())
  .then((json: any) => json.rates);
