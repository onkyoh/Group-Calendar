import React, {useRef, useState} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from '../../../firebase-config'

const DeleteContactModal = ({handleCloseDelete, showDelete, currentUser, errorDelete, setErrorDelete, calendarId, setCalendarId, setContacts}) => {
   
    const idRef = useRef('')

    const deleteForUser = async () => {
        try {
            const userRef = doc(db, "users", currentUser)
            const usersDoc = await getDoc(userRef)
    
            const newContacts = usersDoc.data().contacts
            const idx = newContacts.findIndex(user => user.id === calendarId)
            if (idx >= 0) {
               const dumbySplice = newContacts.splice(idx, 1)
            } else {
                setErrorDelete("The selected user was not found in your contact list")
            }
         
            await updateDoc(userRef, {
                 contacts: [...newContacts]
            })
            setContacts(() => [...newContacts])
        } catch (error) {
        console.log("user error", error.message)
        }
    }
    

    const deleteForContact = async () => {
        try {
            const contactRef = doc(db, "users", calendarId)
            const usersDoc = await getDoc(contactRef)

            const newContacts = usersDoc.data().contacts
            const idx = newContacts.findIndex(user => user.id === currentUser)
            const dumbySplice = newContacts.splice(idx, 1)
        
            await updateDoc(contactRef, {
                contacts: [...newContacts]
            })
            setCalendarId(currentUser)
        } catch (error) {
            console.log("contacts error", error.message)
        }
    }
        
   
    const handleDeleteContact = (e) => {
        e.preventDefault()
 
        if (!calendarId || calendarId === currentUser) {
            setErrorDelete("Please select a contact to delete")
            return
        }
        if (idRef.current.value !== "I acknowledge I am permanently deleting this contact") {
            setErrorDelete("Input did not match required message")
            return
        }

        deleteForUser()
        deleteForContact()
        handleCloseDelete()
    }


  return (
    <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Contact</Modal.Title>
        </Modal.Header>
        
        <Form className='p-3'>
            <div style={{color: "red", textAlign: "center"}}>{errorDelete}</div>
            <Form.Label className='text-center'>Please copy the bolded message identically to confirm contact delete </Form.Label>
            <p className='text-center fw-bold'>I acknowledge I am permanently deleting this contact</p>
                <Form.Control ref={idRef} required/>
            <Button className='d-block mx-auto mt-3' onClick={handleDeleteContact} type="submit" variant="danger">Delete</Button>
        </Form>
    </Modal>
  )
}

export default DeleteContactModal