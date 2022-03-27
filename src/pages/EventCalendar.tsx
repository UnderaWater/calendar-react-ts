import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';


const Calendar: React.FC = () => {
  const [modal, setModal] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event);
  const { user } = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.email)
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModal(false);
    createEvent(event);
  }

  return (
    <div>
      <Events events={[]} />
      <div>
        <button onClick={() => setModal(true)}>
          Add event
        </button>
      </div>
      {modal && <div>
        <EventForm submit={addNewEvent} guests={guests} />
      </div>}
    </div>
  )
}

export default Calendar