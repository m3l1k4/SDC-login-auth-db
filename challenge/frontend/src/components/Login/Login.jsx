import React from 'react'
import './Login.scss'

export default function Login({ handleSubmit }) {

    return (
        <div className="login-wrap">
        <div className="login-form__section">



            <form onSubmit={handleSubmit} className="login-form__form" id="submit-login">
                <div className="login-form__form--body" >

                    <div className="login-form__form--body__field">
                        <p className="login-form__form--body__field--title">Email address</p>
                        <textarea name="useremail" placeholder="Enter Email" id="email-content" className="login-form__form--body__field--login"
                            required></textarea>
                        <p className="login-form__form--body__field--title">Password</p>
                        <textarea name="userpassword" placeholder="Enter Password" id="pwd-content" className="login-form__form--body__field--login"
                            required></textarea>

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