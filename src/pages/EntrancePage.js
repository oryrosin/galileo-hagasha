import { Redirect } from "react-router-dom";
import Navbr from "../../components/Navbar";

function EntrancePage(props) {
    const {activeUser, onLogout} = props;

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div className="p-recipes">
            <Navbr activeUser={activeUser} onLogout={onLogout}/>
            <h1>EntrancePage</h1>
            <h2> a modalic window of problems and tasts jumps here</h2>
        </div>
    )

}

export default EntrancePage;