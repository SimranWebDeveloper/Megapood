import React from "react";
import Live from "../live/live";
import Datapage from "../pageBg/datapage/Datapage";
import PageCard from "../pageBg/PageCard";

const Episodes = () => {
  return (
    <>
      {Datapage.map((element, index) => {
        if (element.category === "Episodes") {
          return <PageCard category={element.category} key={index}/>;
        }
      })}

      <Live />
    </>
  );
};

export default Episodes;
