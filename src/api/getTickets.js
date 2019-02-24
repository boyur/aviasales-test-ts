import urls from 'configs/urls';

export default () => fetch(urls.tickets)
  .then(response => response.json())
  .then(({tickets}) => {
    // sorting
    return tickets.sort((a, b) => a.price - b.price);
  })
  .catch(error => console.log(error.message));
