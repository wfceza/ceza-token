import { addDoc, getDocs, collection, query, where } from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import { useState , useEffect} from "react"
import { db, auth } from "./Firebase"


export default function Main() {

    const [postsList, setPostsList] = useState([])

    const [likeAmount, setLikeAmount] = useState(0)

    const postsRef = collection(db, "post")

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    useEffect(() => {
        getPosts()
    }, [postsList])

    
   /* const getLikes = async (postId) => {
        const likesRef = collection(db, 'likes');
        const likesDoc = query(likesRef, where('postId', '==', postId));

        const data = await getDocs(likesDoc);
        setLikeAmount(data.docs.length);
      }*/

    const [user] = useAuthState(auth);

    const addLike = async (postId) => {
  const likesRef = collection(db, 'likes');
  await addDoc(likesRef, { userId: user?.uid, postId: postId });
      
        if (likeAmount) {
          setLikeAmount(likeAmount + 1);
        } else {
          setLikeAmount(1);
        }}
 
    return  (
        <div>
            {postsList?.map((post) => {
                 return (
                    <div>
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>
            
                        <div className="body">
                            <p>{post.description}</p>
                        </div>
            
                        <div className="footer">
                            <p>@{post.username}</p>
                            <button onClick={() => addLike(post.id)}>&#128077;</button>
                            <p>likes: {likeAmount}</p>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
    