import { Button, Modal } from "react-bootstrap";

function TasksAndProblemsModal(props) {
    const {show, handleClose}=props;
    return(
        <Modal show={show} onHide={handleClose} className="new-modal">
            <Modal.Header closeButton>
                <Modal.Title>בלתי משוייכים ושאר מרעין בישין</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <p>ריג'קטים למינהם שיבואו מאיפשהו</p>
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    סגרי
                </Button>
            
            </Modal.Footer>
        </Modal>
    )
}
export default TasksAndProblemsModal