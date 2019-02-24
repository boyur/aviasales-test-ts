import React from 'react';
import { ITicket as IProps } from 'interfaces';
import './Route.scss';

import MainSection from './MainSection';
import TimeSection from './TimeSection';

const Route = (props: IProps) => {
  const {
    arrival_time,
    departure_time,
    stops,
    ...otherProps
  } = props;

  return (
    <div className="route">
      <TimeSection
        arrival_time={arrival_time}
        departure_time={departure_time}
        stops={stops}
      />
      <MainSection {...otherProps} />
    </div>
  );
};

export default Route;
