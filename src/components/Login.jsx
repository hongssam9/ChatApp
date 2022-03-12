import React from 'react';
import "./Login.css"
import { Button } from "@mui/material"
import logo from "../components/img/logo.png"
import { auth, provider } from "./firebase"
import { actionTypes } from "../reducer.js"
import { useStateValue } from "../StateProvider.js"
const Login = () => {
    const [{}, dispatch] = useStateValue()

    const signIn =() =>{
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((err) => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img
                    src={logo}
                    alt=""
                /> 
                <div className="login__text">
                    <h1>Sign in to ChatApp</h1>
                </div>
                <Button type = "submit" onClick={signIn}>
                    Sign In With Google            
                </Button>
            </div>
        </div>
    );
};

export default Login;