import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const Calendar: React.FC = () => {
  const [modal, setModal] = useState(false);
  const { fetchGuests, createEvent } = useActions();
  const { guests } = useTypedSelector(state => state.event) 

  useEffect(() => {
    fetchGuests()
  }, [])

  return (
    <div>
      <Events events={[]} />
      <div>
        <button onClick={() => setModal(true)}>
          Add event
        </button>
      </div>
      {modal && <div>
        <EventForm submit={event => createEvent(event)} guests={guests} />
      </div>}
    </div>
  )
}

export default Calendar