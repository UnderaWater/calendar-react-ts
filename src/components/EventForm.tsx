import React from 'react';

const EventForm: React.FC = () => {
    return (
        <form>
            <input
                type="text"
                className="calendar__form-control"
                name="discription"
                placeholder="Event"
                required
                autoFocus
            />
            <input type="date" />
            <select name="select">
                <option value="value1">Значение 1</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
            </select>
            <button className="btn" type="submit">Create</button>
        </form>
    )
}

export default EventForm