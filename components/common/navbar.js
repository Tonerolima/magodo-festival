import { useState } from "react";
import NavItem from "./nav-item";
import "../../static/styles/hamburger.css";

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
      { text: "Sponsorship", url: "/sponsorship" },
      { text: "Gallery", url: "/gallery" },
      { text: "Contact Us", url: "/contact" }
    ];

    return links.map(({ text, url }) => (
      <NavItem text={text} url={url} key={url} toggleMenu={toggleMenuState} />
    ));
  };

  return (
    <nav className="navbar navbar-expand-lg p-0 fixed-top">
      <div className="container p-0">
        <div className="navbar-brand p-0">
          <img
            src="https://res.cloudinary.com/tonerolima/image/upload/v1547896858/magodo/logo.png"
            alt="Magodo cultural day logo"
          />
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
            background-color: #272727bb;
          }
          img {
            width: 250px;
            height: 77.5px;
          }
          .hamburger-inner {
            background-color: #ffe400 !important;
          }

          .hamburger-inner::before {
            background-color: #ff652f !important;
          }

          .hamburger-inner::after {
            background-color: #14a76c !important;
          }

          .container {
            max-width: 1400px;
          }

          @media (max-width: 991px) {
            .nav-collapse {
              position: fixed;
              left: -991px;
              height: 100vh;
              width: 280px;
              top: 0;
              background: rgb(20, 167, 108);
              background: -moz-linear-gradient(
                top,
                rgb(20, 167, 108) 8%,
                rgb(39, 39, 39) 64%
              );
              background: -webkit-linear-gradient(
                top,
                rgb(20, 167, 108) 8%,
                rgb(39, 39, 39) 64%
              );
              background: linear-gradient(
                to bottom,
                rgb(20, 167, 108) 8%,
                rgb(39, 39, 39) 64%
              );
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#14a76c', endColorstr='#272727',GradientType=0 );
              box-shadow: 2px 0 10px #00000011;
              padding-top: 50px;
              padding-left: 30px;
              transition: all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
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
