import { addDoc, getDocs, collection, query, where } from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import { useState , useEffect} from "react"
import { db, auth } from "./Firebase"


export default function Main() {
    return (
        <div>
            <h1>This is ,ain</h1>
        </div>
    )
}