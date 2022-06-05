import React from 'react'
import { Button } from 'react-bootstrap'
import { db } from '../../../firebase-config'
import { doc, updateDoc } from 'firebase/firestore'

const Header = ({setCalendarId, calendarId, currentUser, storage, setActiveContact, handleShowContacts}) => {

 const handleCalendarShown = () => {
  setCalendarId(currentUser)
  setActiveContact([])
  }

  const saveChanges = async () => {
      const requestedRef = doc(db, "users", currentUser)
      await updateDoc(requestedRef, {
          calendarData: {...storage}
      })
  }

  

  return (
    <div className='d-flex border shadow p-2 justify-content-center'>
      {calendarId === currentUser ? 
        <Button variant="primary" className="rounded-0 shadow-none" onClick={handleCalendarShown}>My Calendar</Button>
        :
        <Button variant="outline-primary" className="rounded-0 shadow-none" onClick={handleCalendarShown}>My Calendar</Button>
      }
      <Button variant="outline-success" className="rounded-0" onClick={saveChanges}>Save Changes</Button>
    </div>
  )
}

export default Header