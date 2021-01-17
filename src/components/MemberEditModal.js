import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Modal, Button, Table } from "react-bootstrap";


function MemberEditModal(props){
    const { show, handleClose, memberToEdit, selectedId} = props;
    const [editableMember, setEditableMember]= useState(memberToEdit)

    function closeModal() {
        setEditableMember(memberToEdit)
        handleClose();

    }
    

    function handleEditMember() {
    //     let memberOnlyDetailsNoID= {
    //         name: memberToEdit.name,
    //         birthDate: memberToEdit.birthDate,
    //         aliyaDate: memberToEdit.aliyaDate,
    //         idNum: memberToEdit.idNum,
    //         gamish: memberToEdit.gamish,
    //         hitagdut: memberToEdit.hitagdut,
    //         isActive: memberToEdit.isActive,
    //         leaveDate: memberToEdit.leaveDate,
    // }
    
        axios({
            method: 'patch',
            url: "https://api.airtable.com/v0/appivINepijXjwR9W/Table%201?api_key=keyk7ppRxdcVwPFzd",
            data: { "records": [
                {"id": memberToEdit.id,
                 "fields": {
                    name: editableMember.name,
                    birthDate: editableMember.birthDate,
                    aliyaDate: editableMember.aliyaDate,
                    idNum: editableMember.idNum,
                    gamish: editableMember.gamish,
                    hitagdut: editableMember.hitagdut,
                    isActive: editableMember.isActive,
                    leaveDate: editableMember.leaveDate}
                    }
                ]}
          }).then(closeModal());
        
    }

    return (
        <Modal show={show} onHide={closeModal} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
                <Modal.Title>ערוך פרטי חברה</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table responsive striped bordered hover variant="info">
                <thead>
                <tr>
                    <td>שם</td>
                    <td>תאריך לידה</td> 
                    <td>תאריך עליה</td> 
                    <td>ת.ז</td>  
                    <td>גמי"ש</td> 
                    <td>התאגדות</td> 
                    <td>חבר פעיל?</td> 
                    <td>תאריך עזיבה</td>  
                </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>
                            <input type="text" placeholder={editableMember.name}
                            onChange={(e)=> 
                                {console.log( e.target.value)
                                setEditableMember({...editableMember,name: e.target.value})}} />
                        </td>
                        {/* <td contentEditable onInput={(e)=> 
                            {console.log( e.target.innerText)
                            setEditableMember({...editableMember,name: e.target.innerText})}}>
                                {editableMember.name}
                        </td> */}
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,birthDate: e.target.innerText})}>
                                {editableMember.birthDate}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,aliyaDate: e.target.innerText})}>
                                {editableMember.aliyaDate}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,idNum:e.target.innerText})}>
                                {editableMember.idNum}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,gamish :e.target.innerText})}>
                                {editableMember.gamish}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,hitagdut:e.target.innerText})}>
                                {editableMember.hitagdut}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,isActive:e.target.innerText})}>
                                {editableMember.isActive==='true'? "כן": "לא"}
                        </td>
                        <td contentEditable onInput={(e)=> 
                            setEditableMember({...editableMember,hitagdut:e.target.innerText})}>
                                {editableMember.leaveDate}
                        </td> 
                    </tr>
                </tbody>
            </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    בטלי
                </Button>
                <Button variant="primary" 
                onClick={handleEditMember}>
                    שמור שינויים
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default MemberEditModal