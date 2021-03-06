import React, {useState } from 'react'
import { Container, Form, Button } from "react-bootstrap"
import {db, auth} from "../firebase-config"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'
import {ReactComponent as Github } from '../LoginInterface/github.svg';

const Login = ({setCurrentUser, storage, setStorage,}) => {

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [needAccount, setNeedAccount] = useState(false)
    const [error, setError] = useState("")


     
    const handlePopulateStorage = () => {
        for (let x=0; x < 8; x++) {
            for (let i=0; i < 32; i++) {
            storage[x][i] = {note: false, availability: "light"}
            }
        }
    }  

    const register = async () => {
        try {
            const cred = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            handlePopulateStorage()
            const createUser = async () => {
                await setDoc(doc(db, "users", cred.user.uid), {email: cred.user.email, incomingRequests: [], contacts: [], calendarData: {...storage}})
            }
            createUser()
            setCurrentUser(cred.user.uid)
        }
        catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

    const login = async () => {
        try {
            const cred = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            setCurrentUser(cred.user.uid)
        }
        catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }


    const handleNeedAccount = () => {
        setNeedAccount(!needAccount)
        setRegisterEmail("")
        setRegisterPassword("")
        setLoginEmail("")
        setLoginPassword("")
        setError("")
    }

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }


        return (
            <div className='d-flex justify-content-center align-items-center' id="background">
                <div style={{position: "absolute", top: "5px", right: "5px", display: "flex", gap: "5px", cursor: "pointer"}} onClick={()=> openInNewTab("https://github.com/onkyoh")}>
                    <Github style={{fill: "#1266F1"}}/>
                    <div style={{color: "#1266F1"}}>onkyoh</div>
                </div>
                <Container className="border border-2 p-4 bg-white" style={{ width: "80vw", maxWidth: "500px", minWidth: "325px"}}>
                { !needAccount ? 
                    <Form className='bg-white'>
                        <h2 className="text-center">Register User</h2>
                        <p className="text-center text-danger">{error}</p>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mt-1'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        </Form.Group>
                        <Button className="d-block mx-auto mt-3 w-50" onClick={register}>Create User</Button>
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <Form.Text>Already have an account?</Form.Text>
                            <Form.Text className="ms-1 text-primary"onClick={handleNeedAccount} style={{cursor: "pointer"}}>Click here.</Form.Text>
                        </div>
                    </Form>
                    :
                    <Form>
                    <h2 className="text-center">Login</h2>
                    <p className="text-center text-danger">{error}</p>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mt-1'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                        </Form.Group>
                        <Button className="d-block mx-auto mt-3 w-50" onClick={login}>Login</Button>
                        <div className='d-flex align-items-center justify-content-center mt-2'>
                            <Form.Text>Need to create an account?</Form.Text>
                            <Form.Text className="ms-1 text-primary" onClick={handleNeedAccount} style={{cursor: "pointer"}}>Click here.</Form.Text>
                        </div>
                    </Form>
                
                } 
                </Container>
           
            </div>
        )
    }

    export default Login