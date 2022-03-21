import React from 'react'

const LoginForm: React.FC = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submit')
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <h2 className="calendar__form-title">Please login</h2>
            <input type="text" className="calendar__form-control" name="username" placeholder="Email Address" required autoFocus />
            <input type="password" className="calendar__form-control" name="password" placeholder="Password" required />
            <label className="calendar__form-checkbox">
                <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
            </label>
            <button className="btn" type="submit">Login</button>
        </form>
    )
}

export default LoginForm