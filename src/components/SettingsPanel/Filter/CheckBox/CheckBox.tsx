import React from 'react';
import './CheckBox.scss';
import checkMark from './checkMark.svg';

const labelStyle = { backgroundImage: `url(${checkMark})` };

const CheckBox = (props: IProps) => {
  const {
    id,
    isChecked,
    onChange,
    label,
    setOneFilter = () => ({}),
  } = props;

  const onClick = () => {
    setOneFilter(id);
  };

  const renderOnlyButton = () => (
    <button
      id={id}
      className="checkbox__only"
      onClick={onClick}
      type="button"
    >
      ТОЛЬКО
    </button>
  );

  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      {id !== 'all' && renderOnlyButton()}
    </div>
  );
};

interface IProps {
  id: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent) => void;
  setOneFilter?: (id: string) => void;
}

export default CheckBox;
