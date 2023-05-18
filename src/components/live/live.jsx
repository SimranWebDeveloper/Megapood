import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Products from "./data/data";
import Livecard from "./Livecard";

const Live = () => {
  let [products,setProducts] = useState([]);
  function runAll() {

   return  setProducts(Products);
  }
  useEffect(()=>{
    setProducts(Products)
  },[])
  function runEntrepreneurship() {

    setProducts(Products.filter((el)=>{
      return el.category=='Entrepreneurship';
    }));
  }
  function runMedia() {
    setProducts(Products.filter((el)=>{
      return el.category=='Media';
    }));
  }
  function runTech() {

    setProducts(Products.filter((el)=>{
      return el.category=='Tech';
    }));
  }
  function runTuturials() {

    setProducts(Products.filter((el)=>{
      return el.category=='Tuturials';
    }));
  }
  return (
    <>
      <section>
        <div className="py-5">
          <div className={"container " + style.container}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <h2>Live & Upcoming</h2>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <ul className=" d-flex justify-content-between list-unstyled  ">
                  <li>
                    <button className="btn text-muted" onClick={runAll}>
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn text-muted"
                      onClick={runEntrepreneurship}
                    >
                      Entrepreneurship
                    </button>
                  </li>
                  <li>
                    <button className="btn text-muted" onClick={runMedia} >Media</button>
                  </li>
                  <li>
                    <button className="btn text-muted" onClick={runTech}>Tech</button>
                  </li>
                  <li>
                    <button className="btn text-muted" onClick={runTuturials}>Tutorials</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {products.map((product, index) => {
              return <Livecard image={product.image} music={product.music} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Live;
