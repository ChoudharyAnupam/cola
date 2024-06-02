import React, { useEffect, useState } from "react";
import './CreateComponent.css';
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import YearSelector from "../years-selector/YearsComponent";
import ProjectsComponent from "../projects/ProjectsComponent";

function CreateComponent() {

    const [show, setShow] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        console.log("Project name " + projectName);
        console.log("Description : " + description);
    },[projectName, description])
  
    return(
        <>
            <Row className="mrg-20" >
                <Col className="crt-n"  md='auto' sm={5} onClick={handleShow}>
                    Create New <i className="fa-solid fa-plus"></i>
                </Col>
                <Col md={{ span: 'auto', offset: 6 }}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Search project"
                        className="mb-3"
                    >
                    <Form.Control type="text" placeholder="By project" />
                    </FloatingLabel>
                </Col>
                <Col md="auto">
                    <YearSelector/>
                </Col>
            </Row>
            <ProjectsComponent />

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Create Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className="annexure-modal-body">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Enter project name"
                                className="mb-3">
                                
                                <Form.Control type="text" onChange={(e)=> setProjectName(e.target.value)} placeholder="By project" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <FloatingLabel controlId="floatingTextarea2" label="Description">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={(e)=> setDescription(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{"float": "right"}}>
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Create
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default CreateComponent;