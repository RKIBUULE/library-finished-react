import React from "react";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Landing from "../components/Landing";




const Home = () => {
    return (
        <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
        </>
    );
};

export default Home;
