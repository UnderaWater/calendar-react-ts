import axios from 'axios';
import { AppDispatch } from '../../store';
import { IUser } from './../../../models/IUser';
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreator = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
    login: (email: string, password: string) =>async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreator.setIsLoading(true));
            const mockUsers = await axios.get('./users.json')
        } catch (error) {
            dispatch(AuthActionCreator.setError('some error'));
        }
    },
    logout: () =>async (dispatch: AppDispatch) => {
        try {
            
        } catch (error) {
            
        }
    }
}