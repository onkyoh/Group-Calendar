import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { db } from '../../firebase-config'
import { doc, getDoc } from 'firebase/firestore'
import ContactInteractionModal from './ContactInteractionModal'

const ContactList = ({currentUser, contacts, setContacts, setCalendarId, calendarId, activeContact, setActiveContact}) => {

  const handleContactCalendar = (id) => {
    setCalendarId(id)
    console.log("current CalendarId is:", id)
    }

  const handleContactList = async () => {
    try {
        const usersDoc = await getDoc(doc(db, 'users', currentUser))
        const existingContacts = usersDoc.data().contacts
        setContacts(() => [...existingContacts])
    } catch (e) {
      console.log(e)
    }
  }



  const handleActiveContact = (i) => {
    var tempList = []
    tempList[i] = true
    setActiveContact([...tempList])
  }

  useEffect(() => {
    handleContactList()
  }, [])
  
  return (
    <div>
      <h2 className='text-center shadow-sm p-2 mb-0'>Contacts</h2>
      {contacts.length < 1 ? 
      <div className='text-center mt-2' style={{height: "calc(100vh - 235px)"}}>No contacts yet...</div> : 
        <ListGroup style={{height: "calc(100vh - 235px)", overflow: "auto"}} >
          {contacts.map((contact, i) => (
            <ListGroup.Item key={contact.id} className="small text-center border-end-0 rounded-0"
            style={{cursor: "pointer"}} href={i} active={activeContact[i]}
            onClick={() => {handleContactCalendar(contact.id); handleActiveContact(i);}}>
                {contact.email}
            </ListGroup.Item>
          ))
          }
        </ListGroup>
    }
    </div>
  )
}

export default ContactList