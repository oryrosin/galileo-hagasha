import { useState } from "react"
import { Button, Container, Card, Form, Modal } from "react-bootstrap";
import gamishim from "../DB/gamishim.json";
import './EnterWageSection.css'

function EnterWageSection(props) {
    const {show, handleClose, addWage}=props;
    const [enterFile, setEnterFile]= useState(null);
    const [enterGamish, setEnterGamish]= useState(null);
    
    function closeModal() {
        // TODO: add rest of the things before
        handleClose();
    }
    function handleAddWage() {
        alert("ואז קראנו לשרת/ אב הבית");
        closeModal();
    }

    return(
        <Card variant="dark" className="wage-enter">
            <Form className=" col-sm-6">
                <h1>הזנת שכר</h1>
                <Form.Group >
                    <Form.File id="exel" label="!הזיני קובץ אקסל תקין" />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>בחרי גמיש</Form.Label>
                    <Form.Control  as="select" custom>
                        <option>{gamishim[0].name}</option>
                        <option>{gamishim[1].name}</option>
                        <option>{gamishim[2].name}</option>
                        <option>{gamishim[0].name}</option>
                        <option>{gamishim[1].name}</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleAddWage}>עשה קסם</Button>
            </Form>
        </Card>       
    )
}
export default EnterWageSection

