import React from 'react'
import { Modal, closeButton, Button } from 'react-bootstrap'

const ContactInteractionModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} className='text-center'>
        <Modal.Header closeButton >
            <Button variant="outline-primary">Check Calendar</Button>
            <Button variant="outline-danger">Delete Contact</Button>
        </Modal.Header>
    </Modal>
  )
}

export default ContactInteractionModal