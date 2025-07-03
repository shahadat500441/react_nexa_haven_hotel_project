import { createContext, useState,useEffect } from 'react';

import {  createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
     onAuthStateChanged
 } from "firebase/auth";
import auth from './../firebase/firebase.config';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
      return   signOut(auth)
    }

    useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;