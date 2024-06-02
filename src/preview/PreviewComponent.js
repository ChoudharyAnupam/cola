import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import './PreviewComponent.css';
import { keyConsiderData } from "../utill/Project";
import Parser from 'html-react-parser';
import { useNavigate } from "react-router-dom";

function PreviewComponent() {

    const navigate = useNavigate();
    const data = keyConsiderData;

    return(
        <>
            <HeaderComponent/>
            <Container className="container-top-mrg">
                <Card>
                    <Card.Header>
                        <Card.Title>Preview</Card.Title>
                    </Card.Header>
                    <Card.Body>
                    {Object.keys(data).map((key) => (
                    
                        <>
                            <h4>{key}</h4>

                            {data[key].map((value, index) => (
                                <Row key={index} className="mb-2">
                                    <Col md={6}>{Parser(value.content)}</Col>
                                    <Col md='1'><Form.Check className="user-select-none" id="checkbox-id" checked={value.isChecked}/> </Col>
                                    <Col md='3'>{value.timeLines}</Col>
                                    <Col md='2'>{value.attachment}</Col>
                                </Row>
                            ))}
                        </>
                        // <KeyModelComponent keyConsider={key} value={data[key]} />
                    
                    ))}
                    </Card.Body>
                </Card>
            </Container>
            <Button variant="primary" className="btn-prev-mrg " onClick={() => navigate('/home')}>
                Submit
            </Button>
        </>
    )
}

export default PreviewComponent;