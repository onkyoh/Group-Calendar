import React from 'react'
import { Button} from 'react-bootstrap'

const UserInfoComponent = ({currentUser, handleShow, logout}) => {
  return (
    <div className='text-center' style={{height: "120px",backgroundColor: "white"}}>
        <div className='p-2 border-top small'>
            User's Id:  <span className='text-muted'>{currentUser}</span>
        </div>
        <Button variant="outline-danger" onClick={logout}>Sign Out</Button>
    </div>
  )
}

export default UserInfoComponent