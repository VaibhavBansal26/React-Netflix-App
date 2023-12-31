import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

function LoginScreen() {
    const [SignIn,setSignIn] = useState(false)
    return (
        <div className="loginScreen">
            <div className="loginScreen_background">
                <img
                className="loginScreen_logo"
                 src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
            
            <button onClick={() =>setSignIn(true)} className="loginScreen_button"> Sign In</button>
            
            <div className="loginScreen_gradient"/>
            </div>

            <div className="loginScreen_body">
                {SignIn ?(
                    <SignInScreen/>
                ):(
                <>
                <h1>Unlimited films, Tv programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time..</h2>
                <h3>Ready to watch? Enter your email id to create or restar your membership</h3>
                <div className="loginScreen_input">
                    <form>
                        <input type="email" placeholder="Email Address..." />
                        <button onClick={() =>setSignIn(true)} className="loginScreen_getStarted">Get Started</button>
                    </form>
                </div>
                </>)}
            </div>
            
        </div>
    )
}

export default LoginScreen
