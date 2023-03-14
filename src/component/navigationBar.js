import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from "reactstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';



const navigationBar = () => {
  return (
    <div>
   
   <Navbar bg="light" expand="lg">
      <Container fluid>

        <Row>
            <Col xs="2" sm="">
      <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
        </Row>

        <Row>
        <Col xs="2" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
          </Row>

            <Row>
            <Col xs="2" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
          </Row>
            <Row>
          <Col xs="2" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
          </Row>
            <Row>
          <Col xs="1" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

              </Col>
          </Row>
            <Row>
            <Col xs="1" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
          </Row>
          <Row>
          <Col xs="1" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
              </Col>
          </Row>

          <Row>
          <Col xs="1" sm="">
            <NavDropdown title="Menu Item" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
              </Col>
          </Row>
           
         
      </Container>
    </Navbar>

    </div>
  )
}

export default navigationBar