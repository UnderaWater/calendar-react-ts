import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { RouteNames } from '../router/routes';

const Header: React.FC = () => {
    const router = useNavigate();
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        <header>
            <div>
                <div>
                    React Calendar
                </div>
                <nav>
                    <ul>
                        {isAuth ?
                            <li onClick={() => router(RouteNames.LOGIN)}>
                                sign in
                            </li>
                            :
                            <>
                                <li onClick={() => router(RouteNames.LOGIN)}>
                                    Name
                                </li>
                                <li onClick={() => router(RouteNames.LOGIN)}>
                                    Exit
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;