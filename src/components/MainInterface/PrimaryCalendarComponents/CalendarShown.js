import React from 'react'
import CalendarMay from "../../CalendarComponents/CalendarMay";
import CalendarJune from "../../CalendarComponents/CalendarJune";
import CalendarJuly from "../../CalendarComponents/CalendarJuly";
import CalendarAugust from "../../CalendarComponents/CalendarAugust";
import CalendarSeptember from "../../CalendarComponents/CalendarSeptember";
import CalendarOctober from '../../CalendarComponents/CalendarOctober';
import CalendarNovember from '../../CalendarComponents/CalendarNovember';
import CalendarDecember from '../../CalendarComponents/CalendarDecember';


const CalendarShown = ({month, currentMonth, handleCurrentDay, handleCurrentMonth, storage}) => {

  return (
    <div>
    {month[currentMonth] === "May" && <CalendarMay handleCurrentMonth={handleCurrentMonth} handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "June" && <CalendarJune  handleCurrentMonth={handleCurrentMonth} handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "July" && <CalendarJuly handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "August" && <CalendarAugust handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "September" && <CalendarSeptember handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "October" && <CalendarOctober handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "November" && <CalendarNovember handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    {month[currentMonth] === "December" && <CalendarDecember handleCurrentMonth={handleCurrentMonth}  handleCurrentDay={handleCurrentDay} storage={storage}/>}
    </div>
  )
}

export default CalendarShown