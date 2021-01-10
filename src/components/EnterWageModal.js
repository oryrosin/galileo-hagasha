import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap";
import gamishim from '../DB/gamishim.json';

function EnterWageModal(props) {
    const {show, handleClose, addWage}=props;
    const [enterFile, setEnterFile]= useState(null);
    const [enterGamish, setEnterGamish]= useState(null);
    
    function closeModal() {
        handleClose();
    }
    function handleAddWage() {
        alert("ואז קראנו לשרת/ אב הבית");
        closeModal();
    }

    return(
        <Modal show={show} onHide={closeModal} className="new-modal">
            <Modal.Header closeButton>
                <Modal.Title>חלון הזנת שכר</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.File id="exel" label="הזיני קובץ אקסל תקין" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Custom select</Form.Label>
                            <Form.Control as="select" custom>
                            <option>{gamishim[0].name}</option>
                            <option>{gamishim[1].name}</option>
                            <option>{gamishim[2].name}</option>
                            <option>{gamishim[0].name}</option>
                            <option>{gamishim[1].name}</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    בטלי
                </Button>
                <Button variant="primary" onClick={handleAddWage}>
                    עשה קסם
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EnterWageModal

