import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import "./Header.css";
import "./../../pages/Product/Product";

export default function Header() {
  return (
    <header>
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695048401357-b15d664bea59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          // "url('https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="text-white"
            >
              <h1 className="mb-3">
                Lotion Brand
              </h1>
              <h5 className="mb-4">Your skin is important to us</h5>
              <MDBBtn
                className="m-2 btn-outline-light"
                tag="a"
                outline
                size="lg"
                // rel="nofollow"
                // target="_blank"
                href={"/Product"}
              >
                view product
              </MDBBtn>
              {/* <MDBBtn
                className="m-2 btn-outline-light"
                tag="a"
                outline
                size="lg"
                // target="_blank"
                href="https://mdbootstrap.com/docs/standard/"
              >
                more
              </MDBBtn> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
