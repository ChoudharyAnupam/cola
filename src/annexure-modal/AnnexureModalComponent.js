import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import './AnnexurelModalComponent.css';

function AnnexureModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button variant="primary" onClick={handleShow} style={{float: 'right', 'margin-top' : '1rem' }}>
        Annexure
      </Button>

      <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Annexure</Modal.Title>
        </Modal.Header>
        <Modal.Body className="annexure-modal-body">
            Key consideration for site selection<br/>
            ❖ Master planning & plot Size- Adequate size of land to support expansion on 10+ year horizon.<br/>
            ❖ Site location (proximity to intended markets?), zoning, Archelogy constraint, Ground condition
            (Topography of surrounding area, ground level and flooding potential, earthquake resistant,
            Hydrogeology, storm water runoff and flooding risk etc), Transportation, access to water etc.<br/>
            ❖ Deep dive into site selection process to understand water availability for next 10 -15 years period
            through a detailed hydrogeological assessment.<br/>
            ❖ Plant to explore feasibility of renewable electricity (Solar/wind/Hydro) and renewable energy
            through biofuels (biomass).
            Where biomass is not feasible plant shall explore COGEN/TRIGEN possibilities during
            design of GF plants<br/>
            ** Authorised ESDD vendors by INSWA OU<br/>
            ❖ AECOM<br/>
            ❖ Antea group Pvt. Ltd.<br/>
            ❖ Arcadis consulting India pvt. Ltd.<br/>
            Key consideration for Layout design<br/>
            ❖ Plant to share engineering/design layout, if possible, Reflect valuable artistic image (3D design)
            through the combination of architectural design on buildings.<br/>
            (Must comply local planning requirements. For example: Zoning Ordinance, Site Occupancy Index, Green Area Ratio, Building
            Density Ratio, Building Setbacks, National & local Relevant laws, regulations, and codes.)<br/>
            ❖ Following best practices/guidelines by design to be considered in the project design and execution.<br/>
            ❖ KORE requirement PRP-RQ-010 “Good manufacturing practices facility design” can be referred for
            designing facility.<br/>
            ❖ Excel calculation for areas and capacity needs to be shared with OU along with layout for following.<br/>
            o Water Balance & Mass balance exercise for ETP<br/>
            o Calculation sheet for storages areas such as Juice, RM/PM, BB, Cold Storage<br/>
            (-18 deg.C), shrink film, Strech wrap etc.
            o Share Scrap Yard Area Calculation<br/>
            ▪ Hazardous<br/>
            ▪ Non- Hazardous<br/>
            ❖ Orientation Session to be completed with OU Project lead and QSE lead on GMP by Design INSWA<br/>
            toolkit which is shared with bottling system . We will be sharing Link for online access soon.<br/>
            ❖ Sustainability by design to be considered such that SBD score is 70+ for new Greenfields,<br/>
            Orientation Session to be completed with OU Project lead and Sustainability lead on Sustainability
            by Design GEC tool. (Sustainability by Design (coca-cola.com) (click link)<br/>
            ❖ Is the Site plan meets the Demand for future expansion?<br/>
            ❖ Is entire main production building according to process material flow (unilateral) & to ensure clean<br/>
            area isolations and minimise material handling, and ensure most efficient in plant logistics cost<br/>
            ❖ Is utility area located on the side area of the main building, to minimize the impact by noise & visual
            image.<br/>
            ❖ Is Logistics flow and pedestrian flow separated strictly? Consider proper logistics planning for
            reserved area?<br/>
            ❖ Following consideration to be made in Master plan for Road layout and safety.<br/>
            ❖ Is logistics road for material flow two-way road design?<br/>
            ❖ Is there waiting area for trucks that connect with the site external roads, to help achieve a high
            level of flexibility of traffic load?<br/>
            ❖ Are roads for logistics circulation 12m in width, with turning radius of 9m or 12m, for access of
            large and heavy Truck?<br/>
            company street address, city state, Zip Code<br/>
            123-456-7890 | email@example.com Classified - Confidential<br/>
            ❖ Has assessment from 3P*** conducted on Traffic management in case site area/expansion does not
            permit easy access to Traffic movement and safety.<br/>
            Project activities-Critical points needs attention.<br/>
            ❖ Facility to ensure hiring of experienced QA & Safety Manager while project starts to ensure QSE
            requirements from day one and to build culture also.<br/>
            ❖ Plant to also share detailed plan on people recruitment and their induction plant to ensure team is
            on board before readiness of plant.<br/>
            ❖ If borewell is water source, Plant team to follow all the boreholes requirements as per KORE and
            proper covered access control.<br/>
            ❖ All the boreholes water shall be tested for as BP-RQ-180, Who ed4, IS 10500 including
            radioactivity in designing the WTP scheme.<br/>
            ❖ Is required boreholes approval from CGWA in place for extraction of water& applies for the ground
            water use for construction also.<br/>
            ❖ Is CCOE Application for Liquid N2, CO2, HSD Tank, LPG Storage, etc. applied on time. As experience
            showed delay in getting the approval from CCOE.<br/>
            List of Pre-construction Statutory appro vals<br/>
            ❖ Team to prepare and share a list of all statutory requirements and approvals needed to start the<br/>
            Construction activities at site (not limited to the one given below).<br/>
            Building Plan Approval from Industrial Body/Municipal body and<br/>
            Directorate of industries.<br/>
            Consent to Establish the factory (Pre-Approval from Pollution Control
            Authority)<br/>
            Fire Authority - No Objection Certificate (Pre-approval) (Fire authority opinion and
            Proposed Plan approval)<br/>
            Electricity Connection-Temporary (for construction phase, SEB.
            Approval for Tree Cutting if any from Forest department.
            Drainage Plan Approval (To the industrial canal, water body, river etc.,)
            Application for Hazardous Waste Management from PCB
            Approval for Treated wastewater, Pipe line routing and layout approval from PCB
            Registration under BOCW (Building and Construction workers) Act.
            Greenfield projects to comply with building and other construction workers act
            registration.
            Contract Labour Regulation Act Registration by Principal Employer
            Contract Labour License by Contactor
            Diesel Generator Approval from SEB
            Project safety at Site during planning for construction.
            ❖ At minimum, project site must have following and share confirmation with OU to meet compliance.
            Site office at safe location from construction work for project people.
            Site hoardings / display boards on Safety & Motivation
            Site hard barricading for men movement & vehicle movement (Segregation)
            Adequate facility for Change room & Rest room separately for males &
            females (Greenfield Projects)<br/>
            CCTV cameras installation on the project site with a control room and
            dedicated personal to oversee the footage for unsafe acts and conditions.
            No labor camp shall be made in the project site and labor camp made
            outside of the project site should meet the basic hygiene, safety & welfare
            requirements.<br/>
            Power & Water (As agreed during negotiation)<br/>
            General lighting & Task lighting<br/>
            Canteen & Drinking water facility across site as necessary.
            Security to control movement and traffic at site<br/>
            company street address, city state, Zip Code<br/>
            123-456-7890 | email@example.com Classified - Confidential
            External housekeeping requirement<br/>
            Mobile Toilet blocks spread out as necessary (Greenfield Projects)<br/>
            Certified Safety Officer -Certificate to be submitted and ensure adherence
            to safety guidelines (below diagram) below during project execution.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AnnexureModal;