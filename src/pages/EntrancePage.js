import "./EntrancePage.css";
import { Redirect } from "react-router-dom";
import Navbr from "../components/MyNavbar";
import Sidebar from "../components/Sidebar";
import TasksAndProblemsModal from "../components/TasksAndProblemsModal";
import { useState } from "react";


function EntrancePage(props) {
    const {activeUser, onLogout} = props;
    const [showModal, setShowModal] = useState(true);
    
    if (!activeUser) {
        return <Redirect to="/"/>
    }
// some comment
    return (
        <div className="container p-entrance">
            <Navbr activeUser={activeUser} onLogout={onLogout}/>
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9">
                    <h1>דף הבית </h1>
                    <TasksAndProblemsModal show={showModal} handleClose={()=>setShowModal(false)}/>
                </div>
            </div>
            
            
        </div>
    )

}

export default EntrancePage;