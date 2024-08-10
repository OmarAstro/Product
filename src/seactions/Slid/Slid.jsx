import React from "react";
import "./Slid.css";
const Slid = () => {
  return (
    <div>
      <section
        className="slider d-block w-100 position-sticky"
        style={{ minHeight: "100px",maxHeight:"300px" , marginTop: "100px" }}
      >
        <div className="img" style={{ minHeight: "100%" }}>
          <div className="om"></div>
        </div>
      </section>
    </div>
  );
};

export default Slid;
