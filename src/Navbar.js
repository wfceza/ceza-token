import React from "react"
import  './App.css';
import { Link } from "react-router-dom"
import { auth } from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"

export default function Navbar () {

    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <div className="navbar">
            <div className="homeLogin">
                <Link className="home" to="/">Home</Link>
                {!user ? ( <Link className="login" to="/login">Login</Link>
                 )  : (
                <Link className="createpost" to="/createpost">Create Post</Link>
                 )}
            </div>

            <div className="userInfo">
            { user && (
                <>
                <p className="username"> {user?.displayName} </p>
                <img className="loginPhoto" src= {user?.photoURL || ""} width="25" height="25" />
                <button className="signOut" onClick={signUserOut}>Log Out</button>
                </>
            )}
            </div>
           
        </div>
        
    )
}