import { useState } from "react";
import NavItem from "./nav-item";
import "../../static/hamburger.css";

const Nav = () => {
  const [menuState, setMenuState] = useState({
    isOpen: false,
    visibleClass: "",
    hamburgerClass: ""
  });

  const toggleMenuState = () => {
    const { isOpen } = menuState;
    if (!isOpen) {
      return setMenuState({
        isOpen: true,
        visibleClass: "visible",
        hamburgerClass: "is-active"
      });
    } else {
      return setMenuState({
        isOpen: false,
        visibleClass: "",
        hamburgerClass: ""
      });
    }
  };

  const renderLinks = () => {
    const links = [
      { text: "Home", url: "/" },
      { text: "About", url: "/about" },
      { text: "Sponsors", url: "/sponsors" },
      { text: "Gallery", url: "/gallery" },
      { text: "Contact Us", url: "/contact" }
    ];

    return links.map(({ text, url }) => (
      <NavItem text={text} url={url} key={url} />
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container p-0">
        <div className="navbar-brand p-0">
          <img src="/static/images/logo.png" alt="Magodo cultural day logo" />
        </div>
        <button
          className={`hamburger hamburger--elastic d-lg-none ${
            menuState.hamburgerClass
          }`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" onClick={toggleMenuState} />
          </span>
        </button>
        <div className={`nav-collapse ${menuState.visibleClass}`}>
          <ul className="navbar-nav">{renderLinks()}</ul>
        </div>
      </div>

      <style jsx>
        {`
          .navbar {
            background-color: #ff70ca;
          }
          img {
            width: 250px;
            height: 77.5px;
          }
          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
            background-color: #fff !important;
          }

          @media (max-width: 991px) {
            .nav-collapse {
              position: fixed;
              left: -991px;
              height: 100vh;
              width: 280px;
              top: 0;
              background: #fff;
              box-shadow: 2px 0 10px #00000011;
              padding-top: 50px;
              padding-left: 30px;
              transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
              /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#feffff+46,0fbfff+100 */
              background: rgb(254, 255, 255); /* Old browsers */
              background: -moz-linear-gradient(
                top,
                rgb(254, 255, 255) 46%,
                rgb(15, 191, 255) 100%
              ); /* FF3.6-15 */
              background: -webkit-linear-gradient(
                top,
                rgb(254, 255, 255) 46%,
                rgb(15, 191, 255) 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(
                to bottom,
                rgb(254, 255, 255) 46%,
                rgb(15, 191, 255) 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#0fbfff',GradientType=0 ); /* IE6-9 */
            }
            .nav-collapse.visible {
              left: 0;
            }
            nav.navbar a.nav-link {
              font-size: 1.5rem;
              color: #000000ad;
            }
            .nav-item + .nav-item {
              margin-top: 20px;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Nav;
