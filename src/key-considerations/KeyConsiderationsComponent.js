import React, { useState } from "react";
import HeaderComponent from "../header/HeaderComponent";
import { keyConsiderData } from "../utill/Project";
import { Button, Container, Row } from "react-bootstrap";
import './KeyConsiderationsComponent.css';
import KeyModelComponent from "../key-model/KeyModelComponent";
import AnnexureModal from "../annexure-modal/AnnexureModalComponent";
import { useNavigate } from "react-router-dom";

function KeyConsiderationComponents() {

    const data = keyConsiderData;
    const navigate = useNavigate();
   
    return(
        <>
            <HeaderComponent/>
            
            <Container>
    
                <Row>
                <AnnexureModal/>
                {Object.keys(data).map((key) => (
                    
                    <KeyModelComponent keyConsider={key} value={data[key]} />
                   
                ))}
                </Row>  

                <Button variant="primary" className="btn-prev-mrg " onClick={() => navigate('/preview')}>
                    Preview
                </Button>
            </Container>
        </>
    );

}

export default KeyConsiderationComponents;