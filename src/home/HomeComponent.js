import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "../header/HeaderComponent";
import CreateComponent from "../create/CreateComponent";

function HomeComponent() {

    return (
        <>
            <HeaderComponent/>
            <Container>
                <CreateComponent/>
            </Container>
        </>
        
    )
}

export default  HomeComponent;