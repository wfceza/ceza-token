import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore"
import { auth, db} from "./Firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"


export default function Metaverse () {

    const [user] = useAuthState(auth);
    const navigate =  useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You Must Add A Title...."),
        description: yup.string().required("You Must Add A Description..."),

    });

    const { 
        register, 
        handleSubmit, 
        formState: {errors} 
     } = useForm({
        resolver: yupResolver(schema)
    });

    const postRef = collection(db, "post")

    const onCreatePost = async (data) => {
       await addDoc(postRef, {
        ...data,
        username: user.displayName,
        userId: user?.uid,
       });

       navigate("/")
    }
    return (
        <div>
            <h1>Enter into the metaverse</h1>
             <div className="forms">
            <form className="postField" onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder="Title..." {...register("title")} />
                <p style={{color: "red"}}>{errors.title?.message}</p>
                <textarea placeholder="Description..." {...register("description")} />
                <p style={{color: "red"}}>{errors.description?.message}</p>
                <input className="submitBtn" type="submit"/>
            </form>
        </div>
        </div>
       
    )
}