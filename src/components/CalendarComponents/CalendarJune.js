import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import MonthHeader from './MonthHeader'
import WeekHeader from './WeekHeader'

const CalendarJune = ({handleCurrentMonth, handleCurrentDay, storage}) => {
  return (
    <Container>
        <MonthHeader month='June' handleCurrentMonth={handleCurrentMonth}/>
        <WeekHeader/>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][1].availability}`}>1</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][2].availability}`}>2</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][3].availability}`}>3</Button></Col>
            <Col className='p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][4].availability}`}>4</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][5].availability}`}>5</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][6].availability}`}>6</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][7].availability}`}>7</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][8].availability}`}>8</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][9].availability}`}>9</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][10].availability}`}>10</Button></Col>
            <Col className='p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][11].availability}`}>11</Button></Col>
           
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][12].availability}`}>12</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][13].availability}`}>13</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][14].availability}`}>14</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][15].availability}`}>15</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][16].availability}`}>16</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][17].availability}`}>17</Button></Col>
            <Col className='p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][18].availability}`}>18</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][19].availability}`}>19</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][20].availability}`}>20</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][21].availability}`}>21</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][22].availability}`}>22</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][23].availability}`}>23</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][24].availability}`}>24</Button></Col>
            <Col className='p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][25].availability}`}>25</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][26].availability}`}>26</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][27].availability}`}>27</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][28].availability}`}>28</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][29].availability}`}>29</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[1][30].availability}`}>30</Button></Col>
            <Col className='border-end p-0' ></Col>
            <Col className='p-0' ></Col>
        </Row>
    </Container>
  )
}

export default CalendarJune