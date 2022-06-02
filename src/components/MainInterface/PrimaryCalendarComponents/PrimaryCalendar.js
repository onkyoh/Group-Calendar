import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import CalendarShown from "./CalendarShown";
import Note from './Note'
import ToggleButtons from "./ToggleButtons";
import Header from "./Header";
import { auth, db } from "../../firebase-config";
import { updateDoc, collection, doc, getDoc} from "firebase/firestore"; 



export default function PrimaryCalendar({currentUser, calendarId, setCalendarId, setActiveContact}) {

  const [toggle, setToggle] = useState("");
  const [month, setMonth] = useState(["May", "June", "July", "August", "September", "October", "November", "December"])
  const [currentMonth, setCurrentMonth] = useState(1)
  const [previousTarget, setPreviousTarget] = useState({style: {backgroundColor: "", color: ""}})
  const [currentDay, setCurrentDay] = useState(0)
  const [intialized, setInitailized] = useState(false)
  const [storage, setStorage] = useState([[{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}]])

  const userRef = doc(db, 'users', currentUser)
  const contactRef = doc(db, 'users', calendarId)

  const fetchCalendarData = async () => {
    try {
      if (currentUser !== calendarId) {
        const doc = await getDoc(contactRef)
        const acquiredData = doc.data().calendarData
        const tempStorage = Object.values(acquiredData)
        setStorage([...tempStorage])
      } else {
        const doc = await getDoc(userRef)
        const acquiredData = doc.data().calendarData
        const tempStorage = Object.values(acquiredData)
        setStorage([...tempStorage])
      }
    } catch (e) {
      console.log(e.message)
    }
    setInitailized(true)
  }


useEffect(() => {
  fetchCalendarData()
  setToggle("")
}, [calendarId])

const handleCurrentDay = (e) => {
  //darkening selected targets square
  if (toggle === "") {
    previousTarget.style.backgroundColor = ""
    previousTarget.style.color = ""
    
    let classText = e.target.className

    if (classText.includes("success")) {
      e.target.style.backgroundColor = "#0E4D2F"
      e.target.style.color = "white"
    }
    else if (classText.includes("warning")) {
      e.target.style.backgroundColor = "#cc9800"
      e.target.style.color = "white"
    }
    else if (classText.includes("danger")) {
      e.target.style.backgroundColor = "#802029"
      e.target.style.color = "white"
    }
    else if (classText.includes("light")) {
      e.target.style.backgroundColor = "#9F9F9F"
      e.target.style.color = "white"
    }
        setCurrentDay(() => e.target.innerText)
        setPreviousTarget(() => e.target)
       
        
  //changing color (class) and stored availability of current date
  } else {
      let tempCurrentDay = e.target.innerText;
      let tempStorage = [...storage]
      tempStorage[currentMonth][tempCurrentDay].availability = toggle
      
      if (e.target === previousTarget) {
        e.target.style.color = "white"
        switch (toggle) {
          case "light":
            e.target.style.backgroundColor = "#9F9F9F"
            break;
          case 'success':
            e.target.style.backgroundColor = "#0E4D2F"
            break;
          case 'warning':
            e.target.style.backgroundColor = "#cc9800"
            break;
          case 'danger':
            e.target.style.backgroundColor = "#802029"
              break;
          default:
            break;
        }
      }
      setStorage(() => [...tempStorage])
  }
  }

const handleCurrentMonth = (direction) => {
  if (direction === "previous") {
    if (currentMonth > 0) {
      setCurrentMonth(() => currentMonth - 1)
      setCurrentDay(() => 0)
    }
  } else {
    if (currentMonth < 8) {
      setCurrentMonth(() => currentMonth + 1)
      setCurrentDay(() => 0)
    }
  }
}


const handleDisplayNote = () => {
  let tempStorage = [...storage]
  tempStorage[currentMonth][currentDay].note = true
  if (!tempStorage[currentMonth][currentDay].text) {
    tempStorage[currentMonth][currentDay].text = ""
  }
  setStorage(() => [...tempStorage])
}



  return (
    <div style={{width: "100vw", height: "100vh", overflowY: "auto"}}>

      <Header setCalendarId={setCalendarId} calendarId={calendarId} currentUser={currentUser} storage={storage} setActiveContact={setActiveContact}/>

      <Container className="text-center p-2 mt-3">

        { intialized ?  
          <CalendarShown month={month} currentMonth={currentMonth} 
          handleCurrentMonth={handleCurrentMonth} handleCurrentDay={handleCurrentDay} 
          storage={storage}/>
          : null}
      
        {calendarId === currentUser ?
          <>
            <ToggleButtons setToggle={setToggle} toggle={toggle}/>
            {currentDay > 0 ? <Button onClick={handleDisplayNote}>Add Note</Button> : null}
          </>
        : null}    

        {intialized && storage[currentMonth][currentDay].note ? 
          <Note 
            storage={storage} setStorage={setStorage} 
            currentDay={currentDay} currentMonth={currentMonth} 
            month={month} currentUser={currentUser} calendarId={calendarId}/>
        : null}
          
      </Container>
    
    </div>
  );
}
