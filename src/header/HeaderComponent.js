import React from "react";
import { Button, Modal, Nav } from "react-bootstrap";
import logo from '../images/logo.jpeg';
import './HeaderComponent.css';

function HeaderComponent () {

    return (
        <>
            <div className="div_header app-header sticky-header">
                <Modal.Header className='mrg-2r'>
                    <Modal.Title><img src={logo} className="icon-align"/></Modal.Title>
                    <Nav className="justify-content-center" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Project</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">About</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                    <label className="mrg-2l">Vishal</label>
                </Modal.Header>
            </div>
        
        </>
    );
}

export default HeaderComponent;