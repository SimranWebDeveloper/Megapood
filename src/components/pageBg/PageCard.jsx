import React from "react";
import './style.scss'
import Header from "../header/header";
const PageCard = (props) => {
  return (
    <>
      <section className="PageBg ">
      <Header/>
        <div className="box-pageBg d-flex justify-content-center align-items-center ">
          <div className="d-flex justify-content-center align-items-center flex-column ">
            <p className="display-4 fw-semibold">{props.category}</p>
            <p className="my-4">
            <i className="bi bi-house-door-fill"></i>
             Home   
             <i className="bi bi-chevron-right"></i>
             {props.category} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageCard;
