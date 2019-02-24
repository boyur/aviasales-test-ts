import React from 'react';
import filterConfig from 'configs/filter';
import './Filter.scss';

import CheckBox from './CheckBox';

const Filter = (props: IProps) => {
  const {filter, setOneFilter, handleChangeFilter} = props;
  const isAll = filter.length === filterConfig.length;

  const renderCheckBoxes = () => {
    return filterConfig.map(({id, label}) => {
      const index = filter.findIndex((item) => item === parseInt(id, 10));
      const isChecked = index !== -1;

      return (
        <CheckBox
          id={id}
          key={id}
          label={label}
          onChange={handleChangeFilter}
          setOneFilter={setOneFilter}
          isChecked={isChecked}
        />
      );
    });
  };

  return (
    <div className="filter">
      <CheckBox
        id="all"
        label="Все"
        onChange={handleChangeFilter}
        isChecked={isAll}
      />
      {renderCheckBoxes()}
    </div>
  );
};

interface IProps {
  filter: number[];
  handleChangeFilter: (e: React.ChangeEvent) => void;
  setOneFilter: (id: string) => void;
}

export default Filter;
