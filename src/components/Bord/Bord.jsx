import React from "react";
import "./Bord.css";
import { Link } from "react-router-dom";
const Bord = () => {
  return (
    <>
      <section>
        <div
          className=""
          style={{
            backgroundColor: "#1e1e1e",
            height: "60vh",
            marginTop: "100px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            overflow: "hidden",
            zIndex: "3",
          }}
        >
          <div
          className="container"
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div className="bord">
              <img
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                  overflow: "hidden",
                  borderRadius: "50%",
                }}
                src="https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div
              style={{
                textAlign: "center",
                width: "50%",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                lineHeight: "30px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                overflow: "hidden",
              }}
            >
              <p
                style={{
                  color: "#ddc6b6",
                  fontWeight: "bold",
                  fontSize: "30px",
                  overflow: "hidden",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p
                style={{
                  textAlign: "center",
                  overflow: "hidden",
                  fontWeight: "bold",
                  // color: "#ddc6b6",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link
                style={{
                  overflow: "hidden",
                  color: "#ddc6b6",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                  marginTop: "20px",
                  textAlign: "center",
                  backgroundColor: "#1e1e1e",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  border: "1px solid #fafafa",
                  
                  "&:hover": {
                    backgroundColor: "#ddc6b6" ,
                    color: "#1e1e1e",
                  },
                  
                }}
                className="btn bord-btn mx-3 my-3"
              >
                button
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bord;
