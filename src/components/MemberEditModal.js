import { useState } from "react";
import { Form, Modal, Button, Col, Row, Table } from "react-bootstrap";

function MemberEditModal(props){
    const { show, handleClose, memberToEdit, addAndSave } = props;


    function closeModal() {
        handleClose();
    }

    function handleFileChange(e) {
        
    }

    

    // function handleAddRecipe() {
    //     // 1) triggers addRecipe at App that will then add this recipe to its recipes state
    //     addRecipe(name, desc, imgURL);

    //     // 2) cleanup (clean all field + close the modal)
    //     closeModal();
    // }

    return (
        <Modal show={show} onHide={closeModal} size="xl" className="c-new-recipe-modal">
            <Modal.Header closeButton>
                <Modal.Title>ערוך פרטי חברה</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table responsive striped bordered hover variant="danger">
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
                        <td>{memberToEdit.name}</td>
                        <td>{memberToEdit.birthDate}</td> 
                        <td>{memberToEdit.aliyaDate}</td>
                        <td>{memberToEdit.idNum}</td>
                        <td>{memberToEdit.gamish}</td> 
                        <td>{memberToEdit.hitagdut}</td> 
                        <td>{memberToEdit.isActive==='true'? "כן": "לא"}</td>
                        <td>{memberToEdit.leaveDate}</td> 
                    </tr>
                </tbody>
            </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    בטלי
                </Button>
                <Button variant="primary" 
                // onClick={handleAddRecipe}
                >
                    שמור שינויים
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default MemberEditModal