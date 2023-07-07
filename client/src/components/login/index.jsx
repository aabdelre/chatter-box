import { useState, useEffect } from 'react';
import { usePostLoginMutation, usePostSignUpMutation } from '@/state/api';

function Login({ setUser, setSecret }) {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [triggerLogin, resultLogin] = usePostLoginMutation();
    const [triggerSignUp] = usePostSignUpMutation();
    
    const handleLogin = () => {
        triggerLogin({username, password});
    };

    const handleRegister = () => {
        triggerSignUp({username, password});
    };

    useEffect(() => {
        if (resultLogin.data?.response) {
            setUser(username); //use setUser to update the one in App.jsx
            setSecret(password); //use setSecret to update the one in App.jsx
            // This navigates to chat page when looged-in
        }
    }, [resultLogin.data]);
    
    return (
        <div className='login-page'>
            <div className='login-container'>
                <h2 className='title'> CHATTER BOX </h2>
                <p className='register-change' onClick={() => {setIsRegister(!isRegister)}}>
                    {isRegister ? "Already a user?" : "Are you a new user?"}
                </p>
                <div>
                    <input 
                        className='login-input' 
                        type='text' 
                        placeholder='Username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}>
                    </input>
                    <input 
                        className='login-input' 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div className='login-actions'>
                    {isRegister ? (
                        <button type="button" onClick={handleRegister}> Regiter </button>
                    ) : (
                        <button type="button" onClick={handleLogin}> Login </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login;