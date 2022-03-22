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
                            <li onClick={logout}>
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