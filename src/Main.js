import { addDoc, getDocs, collection, query, where } from "firebase/firestore"
import {useAuthState} from "react-firebase-hooks/auth"
import { useState , useEffect} from "react"
import { db, auth } from "./Firebase"


export default function Main() {
    return (
        <div className="main">
            <h1 className="mainHeader">WELCOME TO THE METAVERSE</h1>
        </div>
    )
}