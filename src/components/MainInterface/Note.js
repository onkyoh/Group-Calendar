import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap'



const Note = ({storage, setStorage, currentDay, currentMonth, month, currentUser, calendarId}) => {

    const handleText = (e) => {
        let tempStorage = [...storage]
        tempStorage[currentMonth][currentDay].text = e.target.value
        setStorage(() => [...tempStorage])
    }

    const handleDeleteNote = () => {
        let tempStorage = [...storage]
        tempStorage[currentMonth][currentDay].note = false
        tempStorage[currentMonth][currentDay].text = ""
        setStorage(() => [...tempStorage])
      }


    const noteStyling = {
        width: "350px",
        backgroundColor: "#FBFBFB"
    }

    const textAreaStyling = {
        height: "250px", 
        resize: "none",
        borderColor: "#D4D4D4",
        backgroundColor: "#FBFBFB"
    }
    

  return (
    <Form className="mx-auto mt-2 border pe-2 ps-2 pb-2" style={noteStyling}>
        <Form.Label className="mt-2">{month[currentMonth]} {currentDay}</Form.Label>
            {currentUser === calendarId ? 
                <>
                    <Form.Control as="textarea"
                        className="shadow-none mb-2"
                        placeholder="...write a note"
                        value={storage[currentMonth][currentDay].text}
                        onChange={handleText}
                        style={textAreaStyling} 
                    /> 
                    <div className='d-flex justify-content-end'>
                        <Button variant="outline-danger" onClick={handleDeleteNote}>Delete</Button>
                    </div>
                </>
            :
                <Form.Control as="textarea"
                    className="shadow-none mb-2"
                    value={storage[currentMonth][currentDay].text}
                    style={textAreaStyling}
                    disabled readOnly
                /> 
            }
       </Form>
   
  )
}

export default Note