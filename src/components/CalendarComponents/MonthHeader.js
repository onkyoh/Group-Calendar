import React from 'react'
import { Row, Col } from 'react-bootstrap'

const MonthHeader = ({handleCurrentMonth, month}) => {
  return (
    <Row id="month-bar" className='border border-bottom-0'>
        <Col xs={2} className="border-end pt-1" onClick={() => handleCurrentMonth("previous")} style={{cursor: "pointer", userSelect: "none"}}>&lt;</Col>
        <Col xs={8} className="pt-1 pb-1">{month}</Col>
        <Col xs={2} className="border-start pt-1" onClick={() => handleCurrentMonth("next")}  style={{cursor: "pointer", userSelect: "none"}}>&gt;</Col>
    </Row>
  )
}

export default MonthHeader