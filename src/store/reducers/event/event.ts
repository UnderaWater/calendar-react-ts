import { EventAction, EventActionEnum, EventState } from './types';

const initaalState: EventState = {
    events: [],
    guests: []
}

export default function EventReducer(state = initaalState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload}
        default:
            return state
    }
}