import urls from 'configs/urls';
import { ITicket } from 'interfaces';

export default () => fetch(urls.tickets)
  .then((response: any) => response.json())
  .then(({ tickets }) => {
    // sorting
    return tickets.sort((a: ITicket, b: ITicket) => a.price - b.price);
  });
