import React,{useState,useEffect} from "react";
import { auth } from '../firebase';
import {sendPasswordResetEmail} from "firebase/auth"
export const AuthContext=React.createContext();


export function AuthProvider({children}){
    const[user,setUser]=useState();
    const[loading,setLoading]=useState(true)

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout(){
        return auth.signOut();
    }

     function forgot(email) {
        return sendPasswordResetEmail(auth, email).then((a) => {
            alert("Password reset email sent")
            console.log("OK")
      })
    }

    useEffect(()=>{
        const unsub=auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        })
        return ()=>{
            unsub();
        }
    },[])

    const store={
        user,
        signup,
        login,
        logout,
        forgot
    }

    return(
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>

    )
}