import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router/routes';

const Header: React.FC = () => {
    const router = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const { logout } = useActions();
 
    return (
        <header className='calendar__header'>
                <div className='calendar__header-logo'>
                    React Calendar
                </div>
                <nav>
                    <ul className='calendar__header-nav'>
                        {isAuth ? <>
                            <li onClick={() => router(RouteNames.LOGIN)}>
                                {user.email}
                            </li>
                            <li className='calendar__exit' onClick={logout}>
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
        </header>
    );
};

export default Header;