import React from "react";
import { Col, Container, Image } from "react-bootstrap";
const Video = () => {
  return (
    <>
      <section
        style={{ marginTop: "100px" }}
        className="d-flex align-items-center flex-column p-2 justify-content-center container w-100"
      >
        <h1 className="mb-6 omar">Details</h1>
        <div className="d-flex  flex-lg-nowrap flex-md-wrap flex-wrap  gap-4 justify-content-between container">
          <Col md={4} lg={4} xs={12} className="col-lg-4 col-md-6 col-12 ">
            <h1 className="mb-4" style={{ color: " #ddc6b6" }}>
              Details
            </h1>
            <p className="mb-4 text-secondary">
              Get a soft and moisturized body with this lotion from our website,
              enjoy a wonderful skin care experience and feel refreshed and
              renewed every day.
            </p>
            <div className="border-bottom w-50 border-4"></div>
            <p className="mb-4 mt-2 text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="btn btn-outline-dark mx-3 ">button</button>
            <button className="btn btn-dark fw-bold">More</button>
          </Col>
          <div
            className=" border-4"
            style={{ borderLeft: "1px  solid #ddc6b6" }}
          />
          <Col md={6} lg={6} xs={12} className="d-flex flex-lg-wrap-reverse flex-wrap-reverse flex-md-nowrap justify-content-between align-items-center gap-3">
            <Col className="d-md-block d-lg-felx d-sm-block d-none">
              <Image
                src="https://images.unsplash.com/photo-1556227834-09f1de7a7d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                  objectFit: "cover",
                  borderRadius: "50px 50px 50px 50px",
                }}
                width="200px"
                height={"250px"}
              />
            </Col>
            <Col className="d-flex justify-content-center">
              {/* <Image
                src="https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{ objectFit: "cover", borderRadius: "50px 0px 0px 50px" }}
                width="200px"
              /> */}
              <video
                width="200px"
                style={{
                  objectFit: "cover",
                  borderRadius: "50px 50px 0px 0px",
                  height: "250px",
                }}
                autoPlay={true}
                muted
                loop
              >
                <source src="Lotion.mp4" />
              </video>
            </Col>
            <Col className="d-md-flex d-lg-felx d-none justify-content-center">
              <Image
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="200px"
                height={"250px"}
                style={{
                  objectFit: "cover",
                  borderRadius: "50px 50px 50px 50px",
                }}
              />
            </Col>
          </Col>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Video;
