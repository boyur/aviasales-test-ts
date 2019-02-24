import React from 'react';
import './CurrencyToggle.scss';

const currencies = ['RUB', 'USD', 'EUR'];

const CurrencyToggle = (props: IProps) => {
  const { currency, handleChangeCurrency } = props;

  const renderButtons = () => {
    return currencies.map((value) => {
      const isActive = value === currency;
      const className = isActive ? 'currency-toggle__button is-active' : 'currency-toggle__button';
      const onClick = () => handleChangeCurrency(value);

      return (
        <button
          key={value}
          className={className}
          onClick={onClick}
          type="button"
        >
          {value}
        </button>
      );
    });
  };

  return (
    <div className="currency-toggle__wrapper">
      <div className="currency-toggle">
        {renderButtons()}
      </div>
    </div>
  );
};

interface IProps {
  currency: string;
  handleChangeCurrency: (currency: string) => void;
}

export default CurrencyToggle;
