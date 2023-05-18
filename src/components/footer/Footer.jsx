import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="container  d-flex align-items-end justify-content-center ">
          <div className=" row adittion rounded py-4">
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 ">
              <h3>Sign up for our newsletter!</h3>
              <small>
                Subscribe to receive info on our latest news and episodes
              </small>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-5  ">
              <div className=" p-2 bg-light rounded-pill">
                <div className="inputBox d-flex justify-content-between">
                <input
                type="text"
                className="Subscribeinput "
                placeholder="Your email adress"
              />
              <button className="Subscribe rounded-pill ">Subscribe</button>
                </div>

              </div>

            </div>

          </div>
          <div className="row d-flex  w-100 mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3 ">
            <img
                src="https://preview.colorlib.com/theme/megapod/img/logo.png"
                alt="loading.."
              />
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-2">
            <small className="">
                Copyright ©2023 All rights reserved | This template is made with
                by Colorlib
              </small>
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-lg-3 ">
            <ul className="d-flex list-unstyled justify-content-evenly w-100">
                <li>
                  <i className="bi bi-facebook"></i>
                </li>
                <li>
                  <i className="bi bi-twitter"></i>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                </li>
                <li>
                  <i className="bi bi-youtube"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
