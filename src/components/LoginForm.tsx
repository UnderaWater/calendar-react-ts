import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const { error, isLoading } = useTypedSelector(state => state.auth)

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(AuthActionCreators.login('user@gmail.com', '123'))
    }

    if(isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <h2 className="calendar__form-title">Please login</h2>
            {error && <div>
                {error}
            </div>
            }
            <input type="text" className="calendar__form-control" name="username" placeholder="Email Address" required autoFocus />
            <input type="password" className="calendar__form-control" name="password" placeholder="Password" required />
            <label className="calendar__form-checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
            </label>
            <button className="btn" type="submit">Login</button>
        </form>
    )
}

export default LoginForm