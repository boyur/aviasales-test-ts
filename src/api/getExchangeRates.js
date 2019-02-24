import urls from 'configs/urls';

export default () => fetch(urls.exchangeRates)
  .then(response => response.json())
  .then(json => json.rates)
  .catch(error => console.log(error.message));
