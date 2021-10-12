import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useFirebase()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle}>Google Sigin IN</button>
            <br />
            <button onClick={signInUsingGithub}>Github Sigin IN</button>
            <br />
            <Link to="/register">New User ?</Link>
        </div>
    );
};

export default Login;