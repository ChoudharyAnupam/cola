import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import logo from '../images/coke_hd.png';
import { useNavigate } from "react-router-dom";
import './LoginComponent.css';

function LoginComponent() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('Sign In clicked');
        console.log('Username:', username);
        console.log('Password:', password);
        // Navigate.call('/header');
        navigate('/home');
        // Add your sign-in logic here
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Sign Up clicked');
        console.log('Username:', username);
        console.log('Password:', password);

        // Add your sign-up logic here
    };

    return(
        <>
            <Container>
                {/* <Card.Body>Card.Title, Card.Subtitle, Card.Text, Card.Link, Button, etc</Card.Body> */}
                <Row>

                    <Col md={6}>
                        <img src={logo} className='x-hit' />

                    </Col>
                    {/* <Col md='auto'> className="mx-auto" */}
                    <Col md={6} className='login-form' >
                        <Card className="crd-wth">
                            <Card.Body>
                            <Card.Title className="text-center">Login</Card.Title>
                            <Form>
                                <Form.Group controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 mt-3" onClick={handleSignIn}>
                                Sign In
                                </Button>
                                <Button variant="secondary" type="submit" className="w-100 mt-3" onClick={handleSignUp}>
                                Sign Up
                                </Button>
                            </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                {/* </Col> */}
                </Row>
                
                

            </Container>
        
        </>
    )
}

export default LoginComponent;