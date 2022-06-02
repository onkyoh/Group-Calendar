import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import MonthHeader from './MonthHeader'
import WeekHeader from './WeekHeader'

const CalendarDecember = ({handleCurrentMonth, handleCurrentDay, storage}) => {
  return (
    <Container>
        <MonthHeader month='December' handleCurrentMonth={handleCurrentMonth}/>
        <WeekHeader/>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][1].availability}`}>1</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][2].availability}`}>2</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][3].availability}`}>3</Button></Col>
            <Col className='p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][7].availability}`}>4</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][7].availability}`}>4</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][5].availability}`}>5</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][6].availability}`}>6</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][7].availability}`}>7</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][8].availability}`}>8</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][9].availability}`}>9</Button></Col>
            <Col className='p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][10].availability}`}>10</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][11].availability}`}>11</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][12].availability}`}>12</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][13].availability}`}>13</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][14].availability}`}>14</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][15].availability}`}>15</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][16].availability}`}>16</Button></Col>
            <Col className='p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][17].availability}`}>17</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][18].availability}`}>18</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][19].availability}`}>19</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][20].availability}`}>20</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][21].availability}`}>21</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][22].availability}`}>22</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][23].availability}`}>23</Button></Col>
            <Col className='p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][24].availability}`}>24</Button></Col>
 
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][25].availability}`}>25</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][26].availability}`}>26</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][27].availability}`}>27</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][28].availability}`}>28</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][29].availability}`}>29</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][30].availability}`}>30</Button></Col>
            <Col className='p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[7][31].availability}`}>30</Button></Col>
        </Row>
    </Container>
  )
}

export default CalendarDecember