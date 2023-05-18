import React from "react";
import "./style.scss";
import Header from "../header/header";

const Astoronomy = () => {
  return (
    <div className="astronomy_main">
        <Header/>
        <div className="astoronomy">
        <div className="  container ">
            <div className="row ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                <div>
                <div className="d-flex fw-semibold">
                    <i className="bi bi-calendar"></i>
                    <p>10 Dec 2019</p>
                </div>
                <p className="fw-semibold display-3">
                    Ep 05: Astronomy Binoculars A Great
                </p>
                <div className="d-flex  fw-semibold">
                    <button className="btn btn-primary p-3 me-2 letter-spacing">
                    Subscribe with iTunes
                    </button>
                    <button className="btn btn-light p-3 letter-spacing">
                    Subscribe with RSS
                    </button>
                </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                <img
                src="https://preview.colorlib.com/theme/megapod/img/hero/hero-video.png"
                alt="loading"
                className="w-100 float-end"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
};

export default Astoronomy;
