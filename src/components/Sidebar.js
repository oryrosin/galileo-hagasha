import "./Sidebar.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EnterWageModal from "./EnterWageModal";

function Sidebar(props) {

    const [showModalWage, setShowModalWage] = useState(false);
    
    function addWage(){
        alert("כאן תוקם קריאת שרת מפוארת")
    }
    
    return(
        <div className="sidebar col-sm-3">
            <Button variant="info" onClick={()=>setShowModalWage(true)}> הזן שכר</Button>
            <Button variant="info" onClick="#"> ערוך חברים</Button>
            <Button  variant="info" onClick="#"> הצג שכר</Button>
            <EnterWageModal show={showModalWage} handleClose={() => setShowModalWage(false)} addWage={addWage}/>
        </div>
    )  
}
export default Sidebar;