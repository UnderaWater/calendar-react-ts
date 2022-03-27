import moment, { Moment } from 'moment';
import React, { useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';

interface EvenFormProps {
    guests: IUser[],
}

const EventForm: React.FC<EvenFormProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent);

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEvent({...event, guest: e.target.value})
    }

    const selectDate = (date: React.ChangeEvent<HTMLInputElement>) => {
        console.log(date.target.value)
    }


    return (
        <form>
            <input
                type="text"
                className="calendar__form-control"
                name="event"
                placeholder="Event"
                required
                autoFocus
                value={event.description}
                onChange={e => setEvent({...event, description: e.target.value})}
            />
            <input type="date" required name='date' onChange={(date) => selectDate(date)} />
            <select name="select" onChange={(e) => changeHandler(e)}>
                {props.guests.map((guest) => {
                    return (
                        <option key={guest.email} value={guest.email}>
                            {guest.email}
                        </option>
                    )
                })}
            </select>
            <button className="btn" type="submit">Create</button>
        </form>
    )
}

export default EventForm;