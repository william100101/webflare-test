import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import ModalBody from 'react-bootstrap/esm/ModalBody';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';


function EditForm() {
    const [formShow, setFormShow] =  useState(false);

    return (
    <div>

        <Modal
            size = "lg"
            show = {formShow}
            onHide = {() => setFormShow(false)}>
            
            <Modal.Header closeButton/>
            
            <Modal.Body>

                <Form>
                    <Form.Group controlId='edit_form.control_lot_number'> {/* Lot Number */}
                        <Form.Label>
                            Lot Number
                        </Form.Label>
                        <Form.Control as="textarea">

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='edit_form.control_lot_number'> {/* Title */}
                        <Form.Label>
                            Title
                        </Form.Label>
                        <Form.Control as="textarea">

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='edit_form.control_lot_number'> {/* Description */}
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control as="textarea">

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='edit_form.control_lot_number'> {/* Cosignor */}
                        <Form.Label>
                            Cosignor
                        </Form.Label>
                        <Form.Control as="textarea">

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='edit_form.control_lot_number'> {/* Estimate */}
                        <Form.Label>
                            Estimate
                        </Form.Label>
                        <Form.Control as="textarea">

                        </Form.Control>
                    </Form.Group>


                </Form>

            </Modal.Body>

            <Modal.Footer>

                <Button onClick={() => setFormShow(false)}> 
                    Close
                </Button>
                <Button> {/* hook this up to edit call in server*/}
                    Add Lot
                </Button>

            </Modal.Footer>

        </Modal>

    </div>);
} 

export default EditForm;