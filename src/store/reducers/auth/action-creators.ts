import axios from 'axios';
import { AppDispatch } from '../../store';
import { IUser } from './../../../models/IUser';
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({ type: AuthActionsEnum.SET_USER, payload: user }),
    setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionsEnum.SET_AUTH, payload: auth }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionsEnum.SET_IS_LOADING, payload: payload }),
    setError: (payload: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: payload }),
    login: (email: string, password: string) =>async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            const response = await axios.get<IUser[]>('./user.json');
            const mockUser = response.data.find(user => user.email === email && user.password === password);
            if(mockUser) {
                console.log('yes')
                localStorage.setItem('auth', 'true');
                localStorage.setItem('email', mockUser.email);
                dispatch(AuthActionCreators.setIsAuth(true));
                dispatch(AuthActionCreators.setUser(mockUser));
            } else {
                dispatch(AuthActionCreators.setError('invalid username or password'))
                console.log('no')
            }
            dispatch(AuthActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(AuthActionCreators.setError('some error'));
        }
    },
    logout: () =>async (dispatch: AppDispatch) => {
        try {
            
        } catch (error) {
            
        }
    }
}