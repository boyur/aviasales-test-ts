import React from 'react';
import carriersConfig from 'configs/carriers';
import { ITicket } from 'interfaces';
import './Ticket.scss';

import BuyButton from './BuyButton';
import BuyButtonMobile from './BuyButtonMobile';

import Route from './Route';

interface IProps {
  ticket: ITicket;
  price: string;
}

const Ticket = (props: IProps) => {
  const { price, ticket } = props;
  const { carrier } = ticket;

  return (
    <div className="ticket">
      <div className="ticket__left-column">
        <img
          className="ticket__carrier-img"
          src={carriersConfig[carrier].img}
          alt={carriersConfig[carrier].name}
        />
        <BuyButton price={price} />
      </div>
      <div className="ticket__right-column">
        <Route {...ticket} />
      </div>
      <BuyButtonMobile price={price} />
    </div>
  );
};

export default Ticket;
