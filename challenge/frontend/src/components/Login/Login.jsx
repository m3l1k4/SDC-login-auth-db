import React, { useState } from 'react';
import './Login.scss'


async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


export default function Login({ setToken }) {


    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrap">
            <div className="login-form__section">



                <form onSubmit={handleSubmit} className="login-form__form" id="submit-login">
                    <div className="login-form__form--body" >

                        <div className="login-form__form--body__field">
                            <p className="login-form__form--body__field--title">Email address</p>
                            <input type="text" onChange={e => setUserName(e.target.value)} className="login-form__form--body__field--login"/>
                            <p className="login-form__form--body__field--title">Password</p>
                            <input type="password" onChange={e => setPassword(e.target.value)}  className="login-form__form--body__field--login"/>

                        </div>

                    </div>

                    <div className="login-form__form--options">
                        <button type="submit" className="login-form__form--options__button"
                            id="login-submit-button">login</button>


                    </div>
                </form>



            </div>
        </div>
    )
}