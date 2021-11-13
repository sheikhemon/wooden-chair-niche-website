import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history)

        e.preventDefault()
    }
    return (
        <div>
            <div className="p-5 my-5">
                <h2 className="pb-4">Please Login</h2>
                {user.email && <div className="alert alert-success mb-3 m-auto mt-3 w-50" role="alert">
                    Login Success
                </div>}

                {authError && <div class="alert alert-danger m-auto mt-3 mb-3 w-50 " role="alert">
                    {authError}
                </div>}
                {!loading && <form onSubmit={handleLogin}>

                    <input className="py-1 w-50"
                        required
                        onBlur={handleOnBlur}
                        type="text"
                        name="email"
                        placeholder="Enter Your Email" />
                    <br />
                    <input className="my-3 py-1 w-50"
                        required
                        onBlur={handleOnBlur}
                        type="password"
                        name="password"
                        placeholder="Password Please" />
                    <br />
                    <input className="bg-login w-50 mb-3" type="submit" value="Login" />
                    <br />
                    <Link style={{ textDecoration: 'none', color: '#232946', fontWeight: 'bold' }} to="/register">Are You New User? Please Register</Link>
                </form>}
                {loading && <div className="py-5 my-5"><Spinner className="p-5" animation="grow" variant="info" /> </div>}

            </div>
        </div>
    );
};

export default Login;