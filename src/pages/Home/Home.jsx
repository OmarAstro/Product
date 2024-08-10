import React from "react";
import Header from "../../seactions/Header/Header";
import Accordion from "../../seactions/Accordion/Accordion";
import Slid from "../../seactions/Slid/Slid";
import Controls from "../../seactions/Controls/Controls";
import Video from "../../seactions/Video/Video";
import HomeOne from "../../seactions/Home/Home";
import Bord from "../../components/Bord/Bord";

const Home = () => {
  return (
    <>
      <Header />
      <HomeOne />
      <Bord />
      <Accordion />
      <Slid />
      <Controls />
      <Video />
    </>
  );
};

export default Home;
