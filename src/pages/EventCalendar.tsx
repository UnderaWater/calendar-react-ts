import React, { useEffect, useState } from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';
import { useActions } from '../hooks/useActions';


const Calendar: React.FC = () => {
  const [modal, setModal] = useState(false);
  const { fetchGuests } = useActions()

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
        <EventForm />
      </div>}
    </div>
  )
}

export default Calendar