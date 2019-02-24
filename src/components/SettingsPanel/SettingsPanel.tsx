import React, { memo } from 'react';
import './SettingsPanel.scss';

import CurrencyToggle from './CurrencyToggle';
import Filter from './Filter';

const SettingsPanel = memo((props: IProps) => {
  const {
    currency,
    filter,
    handleChangeCurrency,
    handleChangeFilter,
    setOneFilter,
  } = props;

  return (
    <div className="settings-panel">
      <div className="settings-panel__container">
        <div className="settings-panel__label">
          ВАЛЮТА
        </div>
        <CurrencyToggle
          currency={currency}
          handleChangeCurrency={handleChangeCurrency}
        />
        <div className="settings-panel__label">
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </div>
        <Filter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          setOneFilter={setOneFilter}
        />
      </div>
    </div>
  );
});

interface IProps {
  currency: string;
  filter: number[];
  handleChangeCurrency: (currency: string) => void;
  handleChangeFilter: (e: React.ChangeEvent) => void;
  setOneFilter: (id: string) => void;
}

export default SettingsPanel;
