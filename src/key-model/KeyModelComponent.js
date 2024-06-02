import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import './KeyModelComponent.css';

function KeyModelComponent({ keyConsider, value }) {

    const [show, setShow] = useState(false);
   

    // const projectModel= () => {
    //     console.log("Module open");
    //     navigate('/key-consideration')
    // }
    const handleShow = () => setShow(!show);

    return(
        <>
            <Card key={keyConsider} className='card_over crd-pad' >
                <Card.Header className="crd-hdr-pad" onClick={handleShow}>{keyConsider}</Card.Header>
                {show && 
                    <Card.Body>
                    {value.map((value, index) => (
                        <>
                        <Row key={index} className="mb-2">
                            <Col>{value.content}</Col>
                            <Col md='auto'><Form.Check.Input type="checkbox" /></Col>
                            <Col md='auto'><Form.Control as="textarea" placeholder="Time Line" rows={3} size="md" /></Col>
                            <Col md='auto'><Form.Control type="file" size="sm" /></Col>
                        </Row>
                        <hr/>
                        </>
                    ))} 
                    </Card.Body>
                }
                
            </Card>
        </>
    );
}

export default KeyModelComponent;