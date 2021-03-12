import React from 'react'
import './Login.scss'

export default function Login({ handleSubmit }) {

    return (
        <div className="login-form__section">

            <h3 className="login-form__section--header">Login Page</h3>

            <form onSubmit={handleSubmit} className="login-form__form" id="submit-login">
                <div className="login-form__form--body" >

                    <div className="login-form__form--body__field">
                        <p className="login-form__form--body__field--title">Email address</p>
                        <textarea name="useremail" placeholder="enter email" id="email-content" className="login-form__form--body__field--login-email"
                            required></textarea>
                        <p className="login-form__form--body__field--title">password</p>
                        <textarea name="userpassword" placeholder="enter password" id="pwd-content" className="login-form__form--body__field--login-pwd"
                            required></textarea>

                    </div>

                </div>

                <div className="login-form__form--options">
                    <button type="submit" className="login-form__form--options__button"
                        id="login-submit-button">login</button>
                

                </div>
            </form>



        </div>
    )
}