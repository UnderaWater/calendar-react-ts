import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const LoginForm: React.FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useActions()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(email, password)
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <form className='calendar__login-form' onSubmit={(e) => submit(e)}>
            <div className='calendar__login-content'>
                <h2 className="calendar__form-title">Please login</h2>
                {error && <div>
                    {error}
                </div>
                }
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="calendar__form-control"
                    name="username"
                    placeholder="Email Address: user@gmail.com"
                    required
                    autoFocus
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="calendar__form-control"
                    name="password"
                    placeholder="Password: 123"
                    required
                />
                <div>
                    <button className="calendar__btn" type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm