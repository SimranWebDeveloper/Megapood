import React from "react";
import AboutText from "../aboutText/AboutText";
import Datapage from '../pageBg/datapage/Datapage'
import PageCard from "../pageBg/PageCard";


const About = () => {
  return (
    <>
      {Datapage.map((element, index) => {
        if (element.category === "About") {
          return <PageCard category={element.category} key={index} />;
        }
      })}
      <AboutText />
    </>
  );
};

export default About;
