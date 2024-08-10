import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import SouthAmericaIcon from '@mui/icons-material/SouthAmerica';import '@fontsource/roboto/300.css';

const Footer = () => {
  return (
    <>
      <MDBFooter
        style={{ marginTop: "100px", backgroundColor: "#ddc6b6" }}
        className="text-center text-lg-start text-muted bg-light btn-light mb-3"
      >
    <hr className="m-0" style={{ color: "#ddc6b6", height: "2px", width: "100%", marginTop: "0px" }} />
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container ">
          <div className="me-5 d-none d-lg-block">
            <span style={{ color: "#ddc6b6" , fontWeight:"bold", fontSize:"20px"}}>Help me:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="d-none d-lg-block d-xl-block">
          <MDBContainer className="text-center text-md-start mt-5">
            
          </MDBContainer>
        </section>

        <div
          className="text-center p-4 container bg-dark text-white"
          style={{ backgroundColor: "#ddc6b6", color: "white", borderRadius: "10px" }}
        >
          © 2021 Copyright:
          <a className="text-white fw-bold text-decoration-none" href="https://mdbootstrap.com/">
            astro.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
