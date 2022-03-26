import React from 'react';
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'

interface EventCalandarProps {
    events: IEvent[]
}

const Events: React.FC<EventCalandarProps> = () => {
  return (
    <div>
      <Calendar />
    </div>
  )
}

export default Events