import React from 'react';
import './BuyButton.scss';

interface IProps {
  price: string;
}

const BuyButton = ({ price }: IProps) => (
  <button className="buy-button" type="button">
    <div>Купить</div>
    <div>{`за ${price}`}</div>
  </button>
);

export default BuyButton;
