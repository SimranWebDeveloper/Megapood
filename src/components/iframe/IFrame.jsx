import React from "react";

const IFrame = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76852958192!2d49.690147971330724!3d40.39473700814839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLE!5e0!3m2!1saz!2saz!4v1684233764412!5m2!1saz!2saz"
            width="800"
            height="600"
          ></iframe>
        </div>
        <div className="row g-5 py-5">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="border d-flex justify-content-center align-items-center flex-column p-5">
              <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
              <h3>Address</h3>
              <p className="text-muted">
                59 South Blue Spring Street, Ozone Park, New York, United Stated
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="border d-flex justify-content-center align-items-center flex-column p-5">
              <i className="bi bi-telephone-outbound-fill fs-1 text-primary"></i>
              <h3>Phone</h3>
              <p className="text-muted">
                (+22) 333 333 3333 <br />
                (+22) 555 555 5555
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="border d-flex justify-content-center align-items-center flex-column p-5">
              <i className="bi bi-stopwatch-fill fs-1 text-primary"></i>
              <h3>Working Hours</h3>
              <p className="text-muted">Open: 10am to 6pm ( Sunday Close)</p>
            </div>
          </div>
        </div>
        <div className="row py-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <input type="text"  placeholder="Your name"  className="w-100 p-3 my-2"/>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <input type="text" placeholder="Your email"  className="w-100 p-3 my-2"/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text"  placeholder="Your message" className="w-100 p-3 my-2"/>
            </div>

        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary fs-5" type="submit"> Send message</button>

        </div>
      </div>
    </>
  );
};

export default IFrame;
