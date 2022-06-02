import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import MonthHeader from './MonthHeader'
import WeekHeader from './WeekHeader'

const CalendarMay = ({handleCurrentMonth, handleCurrentDay, storage}) => {


  return (
    <Container>
        <MonthHeader month='May' handleCurrentMonth={handleCurrentMonth}/>
        <WeekHeader/>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][1].availability}`}>1</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][2].availability}`}>2</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][3].availability}`}>3</Button></Col>
            <Col className='border-end p-0' ><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][4].availability}`}>4</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][5].availability}`}>5</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][6].availability}`}>6</Button></Col>
            <Col className="p-0"><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][7].availability}`}>7</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][8].availability}`}>8</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][9].availability}`}>9</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][10].availability}`}>10</Button></Col>
            <Col className='border-end p-0' ><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][11].availability}`}>11</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][12].availability}`}>12</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][13].availability}`}>13</Button></Col>
            <Col className="p-0"><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][14].availability}`}>14</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][15].availability}`}>15</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][16].availability}`}>16</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][17].availability}`}>17</Button></Col>
            <Col className='border-end p-0' ><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][18].availability}`}>18</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][19].availability}`}>19</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][20].availability}`}>20</Button></Col>
            <Col className="p-0"><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][21].availability}`}>21</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][22].availability}`}>22</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][23].availability}`}>23</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][24].availability}`}>24</Button></Col>
            <Col className='border-end p-0' ><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][25].availability}`}>25</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][26].availability}`}>26</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][27].availability}`}>27</Button></Col>
            <Col className="p-0"><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][28].availability}`}>28</Button></Col>
        </Row>
        <Row className='border border-top-0'>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][29].availability}`}>29</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][30].availability}`}>30</Button></Col>
            <Col className='border-end p-0'><Button disabled onClick={handleCurrentDay} className={`w-100 btn rounded-0 shadow-none btn-${storage[0][31].availability}`}>31</Button></Col>
            <Col className='border-end p-0'></Col>
            <Col className='border-end p-0'></Col>
            <Col className='border-end p-0'></Col>
            <Col className="p-0"></Col>
        </Row>
    </Container>
  )
}

export default CalendarMay