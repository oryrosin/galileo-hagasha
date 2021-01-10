import "./EntrancePage.css";
import { Redirect } from "react-router-dom";
import Navbr from "../components/MyNavbar";
import Sidebar from "../components/Sidebar";


function EntrancePage(props) {
    const {activeUser, onLogout} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container p-entrance">
            <Navbr activeUser={activeUser} onLogout={onLogout}/>
            <div className="row">
                <Sidebar/>
                <div className="col-sm-9">
                    <h1>דף הבית </h1>
                    <h2> פה יקפוץ חלון עם בעיות מטרידות</h2>
                </div>
            </div>
            
            
        </div>
    )

}

export default EntrancePage;