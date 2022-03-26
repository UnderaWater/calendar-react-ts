import React, { useState } from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';


const Calendar: React.FC = () => {
  const [modal, setModal] = useState(false)

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