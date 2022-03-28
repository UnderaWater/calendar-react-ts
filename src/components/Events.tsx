import React from 'react';
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'
import { Moment } from 'moment';

interface EventCalandarProps {
  events: IEvent[]
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${year}.${month}.${day}`;
}

const Events: React.FC<EventCalandarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(event => event.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map((event, index) => (
          <div key={index}>
            {event.description}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  )
}

export default Events