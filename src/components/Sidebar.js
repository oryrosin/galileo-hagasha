import "./Sidebar.css";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import EnterWageSection from "./EnterWageSection";
import EditMembers from "./EditMembers";

function Sidebar(props) {
    const [showMemberSection, setShowMemberSection]= useState(false)
    const [showWageSection, setShowWageSection] = useState(false);
    
    function addWage(){
        alert("כאן תוקם קריאת שרת מפוארת")
    }
    
    return(
        <Container>
            <Row className="container">
                <div className="sidebar col-sm-3">
                    <Button variant="info" onClick={()=>setShowWageSection(showWageSection== false ? true: false)}> הזן שכר</Button>
                    <Button variant="info" onClick={()=> setShowMemberSection(showMemberSection== false ? true: false)}> ערוך חברים</Button>
                    <Button  variant="info" onClick="#"> הצג שכר</Button>
                    
                </div>
                <div className= "main-section col-sm-9">
                    {showMemberSection? <EditMembers/>: null}
                    {showWageSection?<EnterWageSection  addWage={addWage}/>: null}
                </div>
            </Row>
        </Container>
    )  
}
export default Sidebar;