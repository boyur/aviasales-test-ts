import memoize from 'fast-memoize';
import moment from 'moment';
import { ITicket } from 'interfaces';

export const declOfNum = (num: number, titles: string[]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(num > 4 && num < 20) ? 2 : cases[(num < 5) ? num : 5]];
};

export const formatDate = memoize((dateString) => {
  const date = moment(dateString);

  return date.format('DD MM YYYY, ddd');
});

export const getFiltredTickets = memoize((tickets: ITicket[], filter: number[]): ITicket[] =>
  tickets.filter((ticket: ITicket) => {
    const index = filter.findIndex((item: number) => item === ticket.stops);
    return index !== -1;
  }),
);

export const formatPrice = (price: number, currency: string, exchangeRates: any): string => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;

  if (currency === 'RUB') {
    return `${price} ₽`.replace(regexp, ' ');
  }

  if (!exchangeRates) {
    switch (currency) {
      case 'USD': {
        return `${(price / 60).toFixed(0)} $`.replace(regexp, ' ');
      }
      case 'EUR': {
        return `${(price / 70).toFixed(0)} €`.replace(regexp, ' ');
      }
      default:
        return `${price}`;
    }
  }

  const USD = price / exchangeRates.RUB;

  switch (currency) {
    case 'USD': {
      return `${USD.toFixed(0)} $`.replace(regexp, ' ');
    }
    case 'EUR': {
      return `${(USD * exchangeRates.EUR).toFixed(0)} €`.replace(regexp, ' ');
    }
    default:
      return `${price}`;
  }
};
