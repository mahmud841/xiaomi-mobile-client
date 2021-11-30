import React from "react";
import { useHistory } from "react-router";
import "./Banner.css";
const Hero = () => {
  const history = useHistory();
  //Banner
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <h6>WELCOME TO Xiaomi Store</h6>
            <h1>Where Life is very Comfortable </h1>
            <p>
              Go on, get your cell phones out. Get the phone according to your
              need We have different variety of phones Open your time limits
            </p>
            <button
              className="btn-style btn-style-primary"
              onClick={() => history.push("/smartphones")}
            >
              {" "}
              Xiaomi Smartphones  
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
