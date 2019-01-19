import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/hamburger.css";
import Page from "../layout/main";
import Nav from "../components/common/navbar";
import { useState } from "react";
import Showcase from "../components/screens/home/showcase";

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
    <Page>
      <Nav />
      <Showcase />
    </Page>
  );
};
