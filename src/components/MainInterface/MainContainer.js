import React, {useState} from 'react'
import Sidebar from './SideBarComponents/Sidebar';
import PrimaryCalendar from './PrimaryCalendarComponents/PrimaryCalendar';

const MainContainer = ({currentUser, setCurrentUser}) => {

  const [calendarId, setCalendarId] = useState(currentUser)
  const [activeContact, setActiveContact] = useState([])

  return (
      <div className='d-flex'> 
        <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} calendarId={calendarId} setCalendarId={setCalendarId} activeContact={activeContact} setActiveContact={setActiveContact}/>
        <PrimaryCalendar currentUser={currentUser} calendarId={calendarId} setCalendarId={setCalendarId} setActiveContact={setActiveContact}/>
    </div>
  )
}

export default MainContainer