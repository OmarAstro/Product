import React from "react";
import "./Controls.css";
import { Col, Container, Row } from "react-bootstrap";
const Controls = () => {
  return (
    <>
      <Container className="" showControls style={{ marginTop: "100px" }}>
        <div className=" d-flex justify-content-center  flex-wrap flex-lg-nowrap flex-md-nowrap gap-4 ">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="d-block  btn-dark position-relative col-4 col-md-3 col-lg-3"
          >
            <img
              src="https://images.unsplash.com/photo-1526429257838-9bf73dd45097?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 h-100  btn-dark "
              style={{ borderRadius: "6px" }}
              alt="..."
            />
            <p className="text-center position-absolute top-50 right-50 textAlign-center w-100 text-light btn-light">
              Ltion brand LOcal
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="d-block  btn-dark position-relative col-4 col-md-3 col-lg-3 "
          >
            <img
              src="https://images.unsplash.com/photo-1695048401313-d7153c37d6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 h-100  btn-dark "
              style={{ borderRadius: "6px" }}
              alt="..."
            />
            <p className="text-center position-absolute top-50 right-50 textAlign-center w-100 text-light btn-light">
              Ltion brand LOcal
            </p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="d-block   btn-dark position-relative col-6 col-md-3 col-lg-3 "
          >
            <img
              src="https://images.unsplash.com/photo-1686121522357-48dc9ea59281?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 h-100  btn-dark "
              style={{ borderRadius: "6px" }}
              alt="..."
            />
            <p className="text-center position-absolute top-50 right-50 textAlign-center w-100 text-light btn-light">
              Ltion brand LOcal
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Controls;
