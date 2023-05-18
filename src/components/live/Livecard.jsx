import React from "react";
import './style.scss'

const Livecard = (props) => {
  return (
    <>
    <div className="container liveCardT  "  >
    <div className="row border rounded ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 p-0">
          <img
            src={props.image}
            className="w-100 rounded-start "
            alt="loading"
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-9 ">
          <div className="py-4 px-3">
            <div className="d-flex justify-content-between">
              <ul className="d-flex list-unstyled">
                <li>
                  <i className="bi bi-calendar"></i> 7 Jun 2019{" "}
                </li>

                <li className="mx-4 px-4  border-end border-start border-dark">
                  <i className="bi bi-person-fill"></i> by John Smith{" "}
                </li>
                <li>
                  <i className="bi bi-tags-fill"></i> Radio, Musican, Camp
                </li>
              </ul>
              <button className="btn btn-outline-primary rounded-pill border-0">
                <i className="bi bi-heart-fill"></i>
              </button>
            </div>
            <h4>
              Episode 01: 6 Powerful Tips To Creating Testimonials That Sell
              Your
            </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              commodi velit eveniet quia rem consectetur exercitationem quis,
              accusantium quae illo.
            </p>
            <audio src={props.music} controls type="audio/mp3"></audio>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Livecard;
