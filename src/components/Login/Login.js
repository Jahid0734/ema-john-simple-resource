import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWeithGoogle()
        .then (res => {
         window.location.pathname = "/review";
        })
    }

    const handleSignOut = () => {
        auth.signOut()
        .then(res => {
            window.location.pathname = "/";
        })
    }
    return (
        <div>
            <h1>This is the login button</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sing Out</button> :
                <button onClick={handleSignIn}>Sing in</button>
            }
        </div>
    );
};

export default Login;