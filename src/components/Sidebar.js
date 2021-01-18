import "./Sidebar.css";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";

import EnterWageSection from "./EnterWageSection";
import EditMembers from "./EditMembers";
import WagesSection from "./WagesSection";

function Sidebar(props) {
    // const [showEnterWage,setShowEnterWage]= useState(false)
    const [showSection, setShowSection]= useState(null)
    // const [showWageSection, setShowWageSection] = useState(false);
    

    function addWage(){
        alert("כאן תוקם קריאת שרת מפוארת")
    }
    const sections= [<EnterWageSection addWage={addWage}/>, <EditMembers />, <WagesSection/>]

    return(
        <Container>
            <Row className="container">
                <div className="sidebar col-sm-3">
                    <Button variant="info" onClick={()=>
                        setShowSection(0)}> הזן קובץ שכר</Button>
                    <Button variant="info" onClick={()=>
                        setShowSection(1)}> ערוך חברים</Button>
                    <Button  variant="info" onClick={()=>
                        setShowSection(2)}> הצג שכר</Button>
                </div>
                <div className= "main-section col-sm-9">
                    {sections[showSection]}
                </div>
            </Row>
        </Container>
    )  
}
export default Sidebar;