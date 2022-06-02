import { Button} from "react-bootstrap";

import React from 'react'

const ToggleButtons = ({setToggle, toggle}) => {

    const toggleFunction = (type) => {
        setToggle(() => type);
      };

  return (
    <div className="p-1">
        <Button onClick={() => toggleFunction("")} className="shadow-none" style={toggle === "" ?  {border: "2px solid black"} : {border: "1px solid #D3D3D3"}}>None</Button>
        <Button onClick={() => toggleFunction("light")} variant="light" className="shadow-none" style={toggle === "light" ?  {border: "2px solid black"} : {border: "1px solid #D3D3D3"}}>Clear</Button>
        <Button onClick={() => toggleFunction("success")} variant="success" className="shadow-none" style={toggle === "success" ?  {border: "2px solid black"} : {}}>Free</Button>
        <Button onClick={() => toggleFunction("warning")} variant="warning" className="shadow-none" style={toggle === "warning" ?  {border: "2px solid black"} : {}}>Mixed</Button>
        <Button onClick={() => toggleFunction("danger")} variant="danger" className="shadow-none" style={toggle === "danger" ?  {border: "2px solid black"} : {}}>Busy</Button>
    </div>
  )
}

export default ToggleButtons


