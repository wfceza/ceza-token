import { auth, provider } from "./Firebase"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"


export default function Login () {

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/')
    }

    const navigate = useNavigate()

    return (
        <div className="loginPage">
          <p className="signIn">Sign In With Google To Continue</p>
          <button className="signInBtn" onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
    
}