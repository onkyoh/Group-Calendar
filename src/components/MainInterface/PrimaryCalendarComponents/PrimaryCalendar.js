import React, { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import CalendarShown from "../PrimaryCalendarComponents/CalendarShown";
import Note from './Note'
import ToggleButtons from "./ToggleButtons";
import Header from "./Header";
import { auth, db } from '../../../firebase-config'
import { updateDoc, collection, doc, getDoc} from "firebase/firestore"; 



export default function PrimaryCalendar({currentUser, calendarId, setCalendarId, setActiveContact, primaryCalendarCSS, calendarName, setCalendarName}) {

  const [toggle, setToggle] = useState("");
  const month = ["May", "June", "July", "August", "September", "October", "November", "December"]
  const [currentMonth, setCurrentMonth] = useState(2)
  const [previousTarget, setPreviousTarget] = useState({style: {backgroundColor: "", color: ""}})
  const [currentDay, setCurrentDay] = useState(0)
  const [intialized, setInitailized] = useState(false)
  const [storage, setStorage] = useState([[{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}], [{note: false}]])


  const userRef = doc(db, 'users', currentUser)
  const contactRef = doc(db, 'users', calendarId)

  const today = new Date()
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

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
      setInitailized(true)
    } catch (e) {
      console.log(e.message)
    }
  }

useEffect(() => {
  const todayArray = [today.getDate(), today.getMonth(), today.getFullYear()]
  console.log(todayArray)
  if (todayArray[2] === 2022) {
    const idx = month.indexOf(monthList[todayArray[1]])
    setCurrentMonth(idx)
    fetchCalendarData(idx)
  } else {
    fetchCalendarData()
  }
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
    if (currentMonth > 1) {
      setCurrentMonth(() => currentMonth - 1)
      setCurrentDay(() => 0)
    }
  } else {
    if (currentMonth < 7) {
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
    <div style={{width: "100vw", height: "100vh", minWidth: "300px"}} id={primaryCalendarCSS}>

      <Header 
        setCalendarId={setCalendarId} calendarId={calendarId} 
        currentUser={currentUser} storage={storage} setActiveContact={setActiveContact} 
        calendarName={calendarName} setCalendarName={setCalendarName}
      />

      <Container className="text-center p-2 mt-3">

        {currentMonth === 0 ? 
          <Spinner animation="border" variant="primary" style={{height: "100px", width: "100px", marginTop: "100px"}}/>
          :
          <>
            {intialized &&
            <>
              <div>
                <div className="mb-3 fst-italic" style={{fontSize: "min(3vw, 2em)"}}>
                  {calendarName}
                </div>
              </div>
              <CalendarShown month={month} currentMonth={currentMonth}
               handleCurrentMonth={handleCurrentMonth} handleCurrentDay={handleCurrentDay} storage={storage}/>
            </>
            }
          
            {calendarId === currentUser &&
              <>
                <ToggleButtons setToggle={setToggle} toggle={toggle}/>
                {currentDay > 0 && <Button onClick={handleDisplayNote}>Add Note</Button>}
              </>
            }    

            {intialized && storage[currentMonth][currentDay].note &&
              <Note 
                storage={storage} setStorage={setStorage} 
                currentDay={currentDay} currentMonth={currentMonth} 
                month={month} currentUser={currentUser} calendarId={calendarId}
              />
            }
          </>
      }
     
      </Container>
    
    </div>
  );
}
