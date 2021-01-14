import { useState } from "react";
import { Form, Modal, Button, Col, Row, Image } from "react-bootstrap";

function MemberEditModal(props){
    const { show, handleClose, addAndSave } = props;
   

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
                {/* <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Recipe Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Name" value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Description" value={desc} onChange={e => setDesc(e.target.value)}  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalImage">
                        <Form.Label column sm={2}>
                            Recipe Image
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                        </Col>
                    </Form.Group>
                </Form> */}
               
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