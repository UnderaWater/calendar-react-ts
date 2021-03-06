import UserApi from '../../../api/UserApi';
import { IEvent } from '../../../models/IEvent';
import { AppDispatch } from '../../store';
import { IUser } from './../../../models/IUser';
import { EventActionEnum, SetEventsAction, SetGuestAction } from "./types";

export const EventActionCreators = {
    setGuest: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const response = await UserApi.getUsers();
            dispatch(EventActionCreators.setGuest(response.data));
        } catch (error) {
            console.log(error)
        }
    },
    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch (error) {
            console.log(error)
        }
    },
    fetchEvents: (user: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(event => event.author === user || event.guest === user);
            dispatch(EventActionCreators.setEvents(currentUserEvents));
        } catch (error) {
            console.log(error)
        }
    }   
}