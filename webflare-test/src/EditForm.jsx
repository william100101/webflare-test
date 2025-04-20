import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditForm({ formShow, setFormShow }) {
    return (
        <Modal
            size="lg"
            show={formShow}
            onHide={() => setFormShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Edit Lot</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="edit_form.control_lot_number">
                        <Form.Label>Lot Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter lot number" />
                    </Form.Group>
                    <Form.Group controlId="edit_form.control_title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="edit_form.control_description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter description" />
                    </Form.Group>
                    <Form.Group controlId="edit_form.control_consignor">
                        <Form.Label>Consignor</Form.Label>
                        <Form.Control type="text" placeholder="Enter consignor name" />
                    </Form.Group>
                    <Form.Group controlId="edit_form.control_estimate">
                        <Form.Label>Estimate</Form.Label>
                        <Form.Control type="text" placeholder="Enter estimate" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setFormShow(false)}>
                    Close
                </Button>
                <Button variant="primary"  onClick={() => setFormShow(false)}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditForm;