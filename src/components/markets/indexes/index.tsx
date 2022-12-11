import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

import DowJones from "./DowJones";

const Crypto = () => (
  <React.Fragment>
    {/* <Helmet title="Crypto Dashboard" /> */}
    <Container fluid className="p-0">
      <Row>
        <Col lg="4" className="d-flex col-4">
          <DowJones />
        </Col>
        <Col lg="4" className="d-flex col-4">
          <DowJones />
        </Col>
        <Col lg="4" className="d-flex col-4">
          <DowJones />
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default Crypto;
