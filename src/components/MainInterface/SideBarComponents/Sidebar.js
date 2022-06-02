import React, {useEffect, useState} from 'react'
import { auth, db } from '../../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import { signOut } from "firebase/auth";
import { Button, ButtonGroup} from 'react-bootstrap'
import ContactList from './ContactList';
import AddContactModal from './AddContactModal';
import DeleteContactModal from './DeleteContactModal';
import IncomingRequests from './IncomingRequests';
import UserInfoComponent from './UserInfoComponent';

const Sidebar = ({currentUser, setCurrentUser, setCalendarId, calendarId, activeContact, setActiveContact}) => {

const logout = async () => {
    await signOut(auth);
    setCurrentUser(() => null);
}  

const [contacts, setContacts] = useState([])

const [showAdd, setShowAdd] = useState(false)
const [showDelete, setShowDelete] = useState(false)

const [showRequests, setShowRequests] = useState(false)

const [errorAdd, setErrorAdd] = useState("")
const [errorDelete, setErrorDelete] = useState("")

const handleCloseAdd = () => {
  setShowAdd(false)
  setErrorAdd("")
}
const handleCloseDelete = () => {
  setShowDelete(false)
  setErrorDelete("")
}

const handleShowAdd = () => setShowAdd(true)
const handleShowDelete = () => setShowDelete(true)

const handleCloseRequests = () => setShowRequests(false)
const handleShowRequests = () => setShowRequests(true)

const [requests, setRequests] = useState([])

const handleCheckRequests = async () => {
  const usersDoc = await getDoc(doc(db, "users", currentUser))
  const existingRequests = usersDoc.data().incomingRequests
  setRequests([...existingRequests])
}

useEffect(() => {
  handleCheckRequests()
}, [])


  return (
    <div className="border d-flex flex-column justify-content-end" style={{height: "100vh", width: "300px"}}>
           
      <ContactList currentUser={currentUser} 
      contacts={contacts} setContacts={setContacts} 
      setCalendarId={setCalendarId} calendarId={calendarId} 
      activeContact={activeContact} setActiveContact={setActiveContact}/>

      <ButtonGroup >
        <Button variant="success" className="rounded-0 shadow-none w-50" onClick={handleShowAdd}>Add</Button>
        <Button variant="danger" className="rounded-0 shadow-none w-50" onClick={handleShowDelete}>Delete</Button>
      </ButtonGroup>

      {requests.length > 0 ? 
      <Button onClick={handleShowRequests} variant="primary" className='w-100 rounded-0'>Check requests</Button> 
      : 
      <Button variant="secondary" disabled className='w-100 rounded-0'>No contact requests</Button>}

      <UserInfoComponent logout={logout} currentUser={currentUser}/>
        
      <AddContactModal showAdd={showAdd} handleCloseAdd={handleCloseAdd} currentUser={currentUser} errorAdd={errorAdd} setErrorAdd={setErrorAdd}/>
      
      <DeleteContactModal showDelete={showDelete} 
      handleCloseDelete={handleCloseDelete} setContacts={setContacts}
      currentUser={currentUser} calendarId={calendarId} setCalendarId={setCalendarId}
      errorDelete={errorDelete} setErrorDelete={setErrorDelete} />
      
      <IncomingRequests 
      showRequests={showRequests} 
      handleCloseRequests={handleCloseRequests} 
      requests={requests} setRequests={setRequests} 
      currentUser={currentUser} 
      contacts={contacts} setContacts={setContacts}
      />
    </div>
  )
}

export default Sidebar