import { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Table } from "react-bootstrap";
import MemberModel from "../Models/MemberModel";
import './EditMembers.css'

function EditMembers(props) {
    
    const [filter, setFilter]= useState("");
    const [membersData, setMembersData]= useState([]);
    
    
    useEffect(()=>{
        axios.get("https://api.airtable.com/v0/appivINepijXjwR9W/Table%201?api_key=keyk7ppRxdcVwPFzd").then(res=>{ 
        const members= res.data.records.map((plainMember,index) => new MemberModel(plainMember.fields, index));
        setMembersData(members)
        });
    });
// נכניס לטבלה את כל הפרטים על כל חבר ותוצג טבלה מפולטרת בהתאם לאינפוט פילטר
    let membersRows;

    if (membersData !== []) {
       
        const filteredResult = membersData
        .filter(member => member.name.includes(filter));
        
        membersRows= filteredResult.map(member=>
            <tr>
              <td>{member.name}</td> 
              <td>{member.gamish}</td> 
              <td>{member.hitagdut}</td> 
              <td>{member.isActive? "כן": "לא"}</td>  
            </tr>
            );
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
            <Table responsive striped bordered hover variant="dark">
                <thead>
                <tr>
                    <td>שם</td> 
                    <td>גמי"ש</td> 
                    <td>התאגדות</td> 
                    <td>חבר פעיל?</td>  
                </tr>
                </thead>
                <tbody> {membersRows} </tbody>
                
            </Table>
        </div>
    )

}
export default EditMembers