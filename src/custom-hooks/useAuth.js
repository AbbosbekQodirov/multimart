import React from 'react'
import {onAuthStateChanged} from "firebase/auth"

import {auth} from "../firebase.config"
import { useState } from 'react'
import { useEffect } from 'react'

function useAuth() {
    const [currentUser, setCurrentUser] = useState({})
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
        })
    })
  return {
    currentUser,
  }
}

export default useAuth