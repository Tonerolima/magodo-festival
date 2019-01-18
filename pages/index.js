import "bootstrap/dist/css/bootstrap.min.css";
import "../static/hamburger.css";
import { useState } from "react";

export default () => {
  const [hamburgerState, setHamburgerState] = useState("");

  const toggleHamburgerState = () => {
    if (hamburgerState === "") {
      return setHamburgerState("is-active");
    } else {
      return setHamburgerState("");
    }
  };

  return (
    <section className="bg-dark text-white">
      <div className="container text-center">
        <h1>Magodo Cultural Day 2019</h1>
        <button
          className={`hamburger hamburger--elastic ${hamburgerState}`}
          type="button"
          onClick={toggleHamburgerState}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <style jsx>
        {`
          section {
            min-height: 700px;
          }
        `}
      </style>
    </section>
  );
};
