import React, {useRef, useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase-config'

const AddContactModal = ({handleCloseAdd, showAdd, currentUser, errorAdd, setErrorAdd}) => {
   
    const idRef = useRef('')



    const sendRequest = async (id) => {
        const requestedRef = doc(db, "users", id)
        const usersDoc = await getDoc(requestedRef)
        const existingRequests = usersDoc.data().incomingRequests
        const existingContacts = usersDoc.data().contacts
        if (!existingRequests.includes(id) || !existingContacts.includes(id) ) {
            await updateDoc(requestedRef, {
                incomingRequests: [...existingRequests, {id: currentUser, email: auth.currentUser.email }]
            })
        }
    }

   
    const handleContactRequest = (e) => {
        e.preventDefault()
        if (!idRef.current.value) {
            setErrorAdd("Please input an ID")
            return
        }
        if (idRef.current.value === currentUser) {
            setErrorAdd("Contact's ID cannot be User's ID")
            return
        }
        sendRequest(idRef.current.value)
        handleCloseAdd()
    }


  return (
    <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        
        <Form className='p-3'>
            <div style={{color: "red", textAlign: "center"}}>{errorAdd}</div>
            <Form.Label>Contact's ID</Form.Label>
                <Form.Control ref={idRef} required/>
            <Button className='d-block mx-auto mt-3' onClick={handleContactRequest} type="submit" variant="success">Send Request</Button>
        </Form>
    </Modal>
  )
}

export default AddContactModal