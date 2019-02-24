import React, { memo } from 'react';
import { formatPrice } from 'utils';
import { ITicket } from 'interfaces';

import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = memo((props: IProps) => {
  const { tickets, currency, exchangeRates } = props;
  if (!tickets) {
    return <div className="tickets-list__no-tickets">Loading...</div>;
  }

  if (!tickets.length) {
    return <div className="tickets-list__no-tickets">Нет билетов</div>;
  }

  const renderTickets = () =>
    tickets.map((ticket: ITicket, i: number) => {
      const price: string = formatPrice(ticket.price, currency, exchangeRates);

      return (
        <Ticket
          key={i}
          ticket={ticket}
          price={price}
        />
      );
  });

  return (
    <div className="tickets-list">
      {renderTickets()}
    </div>
  );
});

interface IProps {
  tickets: ITicket[] | null;
  currency: string;
  exchangeRates: any;
}

export default TicketsList;
