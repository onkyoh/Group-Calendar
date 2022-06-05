import React, { useEffect, useState } from "react";
import Login from './LoginInterface/Login'
import MainContainer from "./components/MainInterface/MainContainer";
import { auth } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import './App.css'



export default function App() {

  const [currentUser, setCurrentUser] = useState('')
  const [storage, setStorage] = useState([[{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}]])

// onAuthStateChanged(auth, (retrievedUser) => {
//   setCurrentUser(retrievedUser)
// })
// this should be acting like use effect and making currentUser last user or smtn

useEffect(() => {
  setCurrentUser(auth.lastNotifiedUid)
  console.log(auth.currentUser)
}, [])

  return (
    <div style={{width: "100vw", height: "100vh"}}>
     
    {currentUser ? <MainContainer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    : 
    <Login setCurrentUser={setCurrentUser} storage={storage} setStorage={setStorage}/>}
   
    </div>
      
  
  );
}
