import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import "./Accordion.css";

const Accordion = () => {
  return (
    <>
      <MDBAccordion
        style={{ marginTop: "100px" }}
        className="container "
        borderless
        initialActive={1}
      >
        <MDBAccordionItem
          className=""
          collapseId={1}
          headerTitle="Accordion Item #1"
        >
          Get a soft and moisturized body with this lotion from our website,
          enjoy a wonderful skin care experience and feel refreshed and renewed
          every day.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Accordion Item #2">
          Get a soft and moisturized body with this lotion from our website,
          enjoy a wonderful skin care experience and feel refreshed and renewed
          every day.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Accordion Item #3">
          Get a soft and moisturized body with this lotion from our website,
          enjoy a wonderful skin care experience and feel refreshed and renewed
          every day.
        </MDBAccordionItem>
      </MDBAccordion>
    </>
  );
};

export default Accordion;
