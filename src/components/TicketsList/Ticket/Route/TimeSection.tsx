import React from 'react';
import PropTypes from 'prop-types';
import { declOfNum } from 'utils';

import airplane from './airplane.svg';

const words = ['пересадка', 'пересадки', 'пересадок'];

interface IProps {
  departure_time: string;
  arrival_time: string;
  stops: number;
}

const TimeSection = (props: IProps) => {
  const { arrival_time, departure_time, stops } = props;

  const pathText = stops ? `${stops} ${declOfNum(stops, words)}` : null;

  return (
    <div className="route__time-section">
      <div className="route__time">
        {departure_time}
      </div>
      <div className="route__path">
        {pathText}
        <img
          className="route__path-airplane"
          src={airplane}
          alt="airplane"
        />
      </div>
      <div className="route__time">
        {arrival_time}
      </div>
    </div>
  );
};

TimeSection.propTypes = {
  departure_time: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
};

export default TimeSection;
