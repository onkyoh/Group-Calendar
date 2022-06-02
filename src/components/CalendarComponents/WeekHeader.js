import React from 'react'
import { Row, Col } from 'react-bootstrap'

const WeekHeader = () => {
  return (
    <Row id="week-bar" className='border'>
        <Col className='border-end'>S</Col>
        <Col className='border-end'>M</Col>
        <Col className='border-end'>T</Col>
        <Col className='border-end'>W</Col>
        <Col className='border-end'>T</Col>
        <Col className='border-end'>F</Col>
        <Col >S</Col>
    </Row>
  )
}

export default WeekHeader