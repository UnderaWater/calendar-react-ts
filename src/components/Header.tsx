import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router/routes';

const Header: React.FC = () => {
    const router = useNavigate();
    const auth = false;

    return (
        <header>
            <div>
                <div>
                    React Calendar
                </div>
                <nav>
                    <ul>
                        {auth ?
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