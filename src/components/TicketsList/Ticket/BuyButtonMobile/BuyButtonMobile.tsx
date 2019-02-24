import React from 'react';
import './BuyButtonMobile.scss';

interface IProps {
  price: string;
}

const BuyButtonMobile = ({ price }: IProps) => (
  <button className="buy-button-mobile" type="button">
    {`Купить за ${price}`}
  </button>
);

export default BuyButtonMobile;
