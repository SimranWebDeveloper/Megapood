import React from "react";
import Datapage from "../pageBg/datapage/Datapage";
import PageCard from "../pageBg/PageCard";
import IFrame from "../iframe/IFrame";

const Contact = () => {
  return (
    <>
      {Datapage.map((element, index) => {
        if (element.category === "Contact") {
          return <PageCard category={element.category} key={index}/>;
        }
      })}

      <IFrame/>
    </>
  );
};

export default Contact;
