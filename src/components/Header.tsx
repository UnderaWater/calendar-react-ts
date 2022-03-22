import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router/routes';
import { AuthActionCreators } from '../store/reducers/auth/action-creators';

const Header: React.FC = () => {
    const router = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();

    return (
        <header>
            <div>
                <div>
                    React Calendar
                </div>
                <nav>
                    <ul>
                        {isAuth ? <>
                            <li onClick={() => router(RouteNames.LOGIN)}>
                                {user.email}
                            </li>
                            <li onClick={() => dispatch(AuthActionCreators.logout())}>
                                Exit
                            </li>
                        </>
                            :
                            <li onClick={() => router(RouteNames.LOGIN)}>
                                sign in
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;