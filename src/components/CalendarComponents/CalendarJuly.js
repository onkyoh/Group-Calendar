import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import MonthHeader from './MonthHeader'
import WeekHeader from './WeekHeader'

const CalendarJuly = ({handleCurrentMonth, handleCurrentDay, storage}) => {
  return (
    <Container>
        <MonthHeader month='July' handleCurrentMonth={handleCurrentMonth}/>
        <WeekHeader/>
        <Row className='border border-top-0'>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][1].availability}`}>1</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][2].availability}`}>2</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][3].availability}`}>3</Button></Col>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][4].availability}`}>4</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][5].availability}`}>5</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][6].availability}`}>6</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][7].availability}`}>7</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][8].availability}`}>8</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][9].availability}`}>9</Button></Col>        
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][10].availability}`}>10</Button></Col>   
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][11].availability}`}>11</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][12].availability}`}>12</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][13].availability}`}>13</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][14].availability}`}>14</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][15].availability}`}>15</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][16].availability}`}>16</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][17].availability}`}>17</Button></Col>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][18].availability}`}>18</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][19].availability}`}>19</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][20].availability}`}>20</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][21].availability}`}>21</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][22].availability}`}>22</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][23].availability}`}>23</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][24].availability}`}>24</Button></Col>
            <Col className='border-end p-0' ><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][25].availability}`}>25</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][26].availability}`}>26</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][27].availability}`}>27</Button></Col>
            <Col className="border-end p-0"><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][28].availability}`}>28</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][29].availability}`}>29</Button></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][30].availability}`}>30</Button></Col>
        </Row>
        <Row>
        <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0'><Button onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[2][31].availability}`}>31</Button></Col>
            <Col className='border-end p-0' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='border-end p-0 ' ></Col>
            <Col className='p-0 ' ></Col>
        </Row>
    </Container>
  )
}

export default CalendarJuly