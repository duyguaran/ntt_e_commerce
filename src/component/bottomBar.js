import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../bottomBar.css";
import { GrInstagram } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Row, Col, Container } from "reactstrap";

const bottomBar = () => {
  return (
    <div class="div">
      <div className="pl-20 pt-10 flex-initial  mt-4 ">
        <div class="input-group">
          <div>
            <div className="">
              <img src="/image/nttdata.png"></img>
            </div>
            <p className="text-gray-50">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <input
              type="text"
              placeholder="E-Mail"
              aria-label="Recipient's username with two button addons"
            />
            <button class="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
          <div className="pl-24 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
          <div className="pl-24 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
          <div className="pl-24 mb-10 text-gray-50">
            <h4>Title</h4>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
            <h5>Subtitle</h5>
          </div>
        </div>
      </div>
      <div className="h-12 flex-initial w min-w-min flex  gap-40 mt-4 ">
        <hr class=".bg-color-white"></hr>
        <Container className="h-12 flex-initial w min-w-min flex  gap-40 mt-4">
        <Row>
          
          <Col xs="5">
            <p> Contact@nttdata.com</p>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <p> +905356245678</p>
          </Col>
        </Row>
        <Row>
          <Col xs="1" >
            <GrInstagram></GrInstagram>
          </Col>
          <Col xs="1">
            <BsFacebook></BsFacebook>
          </Col  >
            <Col xs="1" >
            <FaLinkedin></FaLinkedin>
          </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default bottomBar;
