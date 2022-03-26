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
    }
}