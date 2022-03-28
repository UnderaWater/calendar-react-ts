import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';

interface EvenFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void,
    setModal: (value: boolean) => void,
    modal: boolean
}

const EventForm: React.FC<EvenFormProps> = (props) => {
    const { user } = useTypedSelector(state => state.auth)
    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description: ''
    } as IEvent);

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEvent({ ...event, guest: e.target.value });
    }

    const selectDate = (date: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({ ...event, date: date.target.value.split('-').join('.') });
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.submit({ ...event, author: user.email });
    }

    const validate = () => {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
    }

    return (
        <div onClick={() => props.setModal(false)} className='calendar__background-modal'>
            <form className='calendar__form' onClick={(e) => e.stopPropagation()} onSubmit={(e) => submitForm(e)}>
                <div className='calendar__form-container'>
                    <input
                        type="text"
                        className="calendar__form-control"
                        name="event"
                        placeholder="Event"
                        required
                        autoFocus
                        value={event.description}
                        onChange={e => setEvent({ ...event, description: e.target.value })}
                    />
                    <input type="date" min={validate()} required name='date' onChange={(date) => selectDate(date)} />
                    <select className='calendar__form-select' name="select" onChange={(e) => changeHandler(e)}>
                        {props.guests.map((guest) => {
                            return (
                                <option key={guest.email} value={guest.email}>
                                    {guest.email}
                                </option>
                            )
                        })}
                    </select>
                    <div className='calendar__modal-btn'>
                        <button className="modal__btn" type="submit">Create</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EventForm;