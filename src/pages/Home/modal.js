import React, {useState} from "react";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function OnSaveModal(props) {
    const myProps = props;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [validated, setValidated] = useState(false);

    function handleOnSaveClicked() {
        setValidated(true);

        if (name.length !== 0 && description.length !== 0) {
            myProps.onHide('save', name, description);
        }
    }

    function handleOnCancelClicked() {
        myProps.onHide('cancel', null, null);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Save my song
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Name of the song</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter name"
                                      required
                                      value={name}
                                      onChange={event => setName(event.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Your name field is empty. Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description of the song</Form.Label>
                        <Form.Control type="text"
                                      as="textarea"
                                      rows={5}
                                      required
                                      placeholder="Enter description"
                                      value={description}
                                      onChange={event => setDescription(event.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Your description field is empty. Please provide a valid description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleOnSaveClicked}>Save</Button>
                <Button onClick={handleOnCancelClicked}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}