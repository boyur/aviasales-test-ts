import React from 'react';
import { formatDate } from 'utils';

interface IProps {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  arrival_date: string;
  departure_date: string;
}

const MainSection = (props: IProps) => {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    arrival_date,
    departure_date,
  } = props;

  return (
    <div className="route__main-section">
      <div className="route__origin">
        <div className="route__city">
          {`${origin}, ${origin_name}`}
        </div>
        <div className="route__date">
          {formatDate(departure_date)}
        </div>
      </div>
      <div className="route__destination">
        <div className="route__city">
          {`${destination_name}, ${destination}`}
        </div>
        <div className="route__date">
          {formatDate(arrival_date)}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
