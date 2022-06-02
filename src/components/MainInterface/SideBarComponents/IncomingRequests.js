import { ListGroup, Modal, Button, ButtonGroup } from 'react-bootstrap'
import React, {useState} from 'react'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'

const IncomingRequests = ({showRequests, handleCloseRequests, requests, setRequests, currentUser, contacts, setContacts}) => {


    //updating user's contacts with contact
    const handleUserContact = async (id, contactsEmail) => {
      try {
        const userRef = (doc(db, 'users', currentUser))
        const userDoc = await getDoc(userRef)
        const existingContacts = userDoc.data().contacts
        await updateDoc(userRef, {
            contacts: [...existingContacts, {id: id, email: contactsEmail }]
        })
        setContacts(() => [...existingContacts, {id: id, email: contactsEmail }])
      } catch (e) {
        console.log(e.message)
      }
    }

    //updating contact's contacts with user
    const handleContactContact = async (id) => {
      try {
        const contactRef = (doc(db, "users", id))
        const contactDoc = await getDoc(contactRef)
        const existingContacts = contactDoc.data().contacts
        await updateDoc(contactRef, {
            contacts: [...existingContacts, {id: currentUser, email: auth.currentUser.email}]
        })
      } catch (e) {
        console.log(e.message)
      } 
    }

    const accept = async (id) => {
      try {
        const tempRequests = [...requests]
        const idx = tempRequests.findIndex(user => user.id === id)
        const incomingInfo = tempRequests.splice(idx, 1)
        const email = incomingInfo[0].email

        setRequests([...tempRequests])

        await updateDoc((doc(db, "users", currentUser)), {
            incomingRequests: [...tempRequests]
        })

        handleUserContact(id, email)
        handleContactContact(id)
      } catch (e) {
        console.log(e.message)
      }
        
   
    }

    const deny = async (id) => {
      try {
        const tempRequests = [...requests]
        const idx = tempRequests.indexOf(id)
        tempRequests.splice(idx, 1)

        setRequests([...tempRequests])

        await updateDoc((doc(db, "users", currentUser)), {
            incomingRequests: [...tempRequests]
        })
      } catch (e) {
        console.log(e.message)
      }
        
    }


  return (
    <Modal show={showRequests} onHide={handleCloseRequests}>
        <Modal.Header closeButton className='border-bottom-0'>
          <Modal.Title>Incoming requests</Modal.Title>
        </Modal.Header>
       <ListGroup style={{overflowy: "auto"}}>
        {requests.map((request) => (
          <ListGroup.Item key={request.id} className="d-flex align-items-center p-2 rounded-0">
            {request.email}
            <ButtonGroup className='ms-auto' >
                <Button variant='outline-success' className='rounded-0' onClick={() => accept(request.id)}>O</Button>
                <Button variant='outline-danger' className='rounded-0' onClick={() => deny(request.id)}>X</Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))
        }
      </ListGroup>
    </Modal>
  )
}

export default IncomingRequests