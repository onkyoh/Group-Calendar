import React, {useState} from 'react'
import Sidebar from './SideBarComponents/Sidebar';
import PrimaryCalendar from './PrimaryCalendarComponents/PrimaryCalendar';
import { auth } from '../../firebase-config';

const MainContainer = ({currentUser, setCurrentUser}) => {

  const [calendarId, setCalendarId] = useState(currentUser)
  const [calendarName, setCalendarName] = useState("User's Calendar")
  const [activeContact, setActiveContact] = useState([])
  const [sidebarCSS, setSidebarCSS] = useState("hide_sidebar")
  const [primaryCalendarCSS, setPrimaryCalendarCSS] = useState("show_primaryCalendar")
  const [showContactsCSS, setShowContactsCSS] = useState('open_contacts')

  const handleShowContacts = () => {
    if (primaryCalendarCSS === "show_primaryCalendar") {
      setPrimaryCalendarCSS("hide_primaryCalendar")
      setSidebarCSS("show_sidebar")
      setShowContactsCSS("open_calendar")
    } else {
      setPrimaryCalendarCSS("show_primaryCalendar")
      setSidebarCSS("hide_sidebar")
      setShowContactsCSS("open_contacts")
    }
  }
  return (
      <div id="mainContainer">
        <Sidebar currentUser={currentUser} setCurrentUser={setCurrentUser} calendarId={calendarId} setCalendarId={setCalendarId} activeContact={activeContact} setActiveContact={setActiveContact} sidebarCSS={sidebarCSS} setCalendarName={setCalendarName}/>
        <PrimaryCalendar currentUser={currentUser} calendarId={calendarId} setCalendarId={setCalendarId} setActiveContact={setActiveContact} primaryCalendarCSS={primaryCalendarCSS} calendarName={calendarName} setCalendarName={setCalendarName}/>
        <div className='shadow-md display_contacts_container'>
          <div onClick={handleShowContacts} className="display_contacts" id={showContactsCSS}></div>
          <div id="triangle1"></div>
          <div id="triangle2"></div>
        </div> 
    </div>
  )
}

export default MainContainer