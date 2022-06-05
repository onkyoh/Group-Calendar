import React, { useEffect, useState } from "react";
import Login from './LoginInterface/Login'
import MainContainer from "./components/MainInterface/MainContainer";
import { auth } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import './App.css'
import { Spinner } from "react-bootstrap";




export default function App() {

  const [currentUser, setCurrentUser] = useState('')
  const [storage, setStorage] = useState([[{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}]])
  const [loading, setLoading] = useState(true)

onAuthStateChanged (auth, (retrievedUser) => {
  setCurrentUser(retrievedUser.uid)
  setLoading(false)
})

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      {loading ? 
        <>
          <Spinner animation="border" variant="primary" style={{height: "100px", width: "100px", marginTop: "100px"}}/>
        </>
          : 
        <> 
          {currentUser ? <MainContainer currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            : 
          <Login setCurrentUser={setCurrentUser} storage={storage} setStorage={setStorage}/>}
        </>
        }
    </div>
      
  
  );
}
