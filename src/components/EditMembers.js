import { useEffect, useState } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import MemberModel from "../Models/MemberModel";
import MemberCard from "./MemberCard";

function EditMembers(props) {
    
    const [filter, setFilter]= useState("");
    const [membersData, setMembersData]= useState([]);
    
    
    useEffect(()=>{
        axios.get("members.json").then(res=>{ 
        const members= res.data.members.map(plainMember => new MemberModel(plainMember));
        setMembersData(members)
        });
    });
// נכניס לטבלה את כל הפרטים על כל חבר ותוצג טבלה מפולטרת בהתאם לאינפוט פילטר
    let memberCard;

    if (membersData !== []) { 
        const filteredResult = membersData
        .filter(member => member.name.includes(filter));
        memberCard= filteredResult.map(member=> <MemberCard member={member}/>);
            };

    return(
        <div id="main"> 
            <h1>חברים</h1>
            <div className="navbar-nav row">
                <form>
                    <label htmlFor="filter" > </label>
                    <input type="text" placeholder="לא מסננים.." id="filter" value={filter} onChange={(e)=> setFilter(e.target.value)}/>
                </form>
            </div>
            <div className="container" id="members-to-show">
                {memberCard}
            </div> 
        </div>
    )

}
export default EditMembers