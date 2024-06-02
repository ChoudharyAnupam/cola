import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button, FloatingLabel, Form } from 'react-bootstrap';
import './DynamicGridComponent.css';
import { useNavigate } from 'react-router-dom';

function DynamicGrid({ item }) {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const projectModel= () => {
        console.log("Module open");
        navigate('/key-consideration')
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const keyConsider = () => {
        handleClose();

    }

    return (
    <>
        <Col md={4} className='col-pad'> 
            <Card className='card_over' onClick={handleShow}>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Card.Footer className='text-size'>
                    <Row>
                        {(item.projectStatus ==='Completed')? 
                        <Col className='text-end'>
                            <a>{item.projectStatus}</a>
                        </Col>:
                        <>
                            <Col md={7}>Manager approval : <a className={(item.managerApproval === 'Pending')?'hdr-txt-p': 'hdr-txt-r' }>{item.managerApproval}</a></Col>
                            <Col md={5} className='text-end'>
                                Status : <a className={ (item.projectStatus=== 'Submitted')? 'fotr-txt-b':'fotr-txt-g'}>{item.projectStatus}</a>
                            </Col>
                        </>}
                    </Row>
                </Card.Footer>    
            </Card>
        </Col>

        <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-div">
                    <Row>
                        <Col className='col-b-decor' onClick={projectModel}>Green Project</Col>
                        <Col className='col-b-decor' onClick={projectModel}>Brown Project</Col>
                    </Row>
                </Modal.Body>
                    
                    
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Create
                    </Button>
                </Modal.Footer> */}
            </Modal>
    </>);
}


export default DynamicGrid;