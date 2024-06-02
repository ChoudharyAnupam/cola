import React from "react";
import { Container, Row } from "react-bootstrap";
import DynamicGrid from "../dynamic-grid/DynamicGridComponent";
import AnnexureModal from "../annexure-modal/AnnexureModalComponent";
import './ProjectsComponent.css';

function ProjectsComponent() {

    var data = [
        { title: 'Project 1', description: 'Content for project 1', projectStatus: 'Inprogress', managerApproval: '' },
        { title: 'Project 2', description: 'Content for project 2', projectStatus: 'Submitted', managerApproval: 'Pending' },
        { title: 'Project 3', description: 'Content for project 3', projectStatus: 'Inprogress', managerApproval: '' },
        { title: 'Project 4', description: 'Content for project 4', projectStatus: 'Inprogress', managerApproval: 'Rejected' },
        { title: 'Project 5', description: 'Content for project 5', projectStatus: 'Submitted', managerApproval: 'Pending' },
        { title: 'Project 6', description: 'Content for project 6', projectStatus: 'Inprogress', managerApproval: '' },
        { title: 'Project 7', description: 'Content for project 7', projectStatus: 'Completed', managerApproval: '' },
        { title: 'Project 8', description: 'Content for project 8', projectStatus: 'Inprogress', managerApproval: '' },
        // Add more Projects as needed
    ];

    const addProject=(records) => {
        data.concat(records);
    }

    return(
        <Container>
            {/* <AnnexureModal /> */}
            <Row>
                {data.map((item, colIndex) => (
                    <DynamicGrid item={item} key={colIndex}/>
                ))}
            </Row>
        </Container>
    )
}

export default ProjectsComponent;