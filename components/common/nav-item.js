import Link from "next/link";
import { withRouter } from "next/router";

const NavItem = ({ router: { pathname }, text, url, toggleMenu }) => {
  const active = pathname === url ? "active" : "";
  return (
    <li className={`nav-item px-2 ${active}`} onClick={toggleMenu}>
      <Link href={url}>
        <a className="nav-link">{text}</a>
      </Link>
      <style jsx>
        {`
          a.nav-link {
            text-decoration: none;
            font-size: 1.2rem;
            color: #747474;
            font-weight: bold;
          }
          a.nav-link:hover {
            color: #74747455;
          }
          .nav-item.active {
            background-color: #ffe400;
            border-radius: 5px;
          }
          @media (max-width: 991px) {
            a.nav-link {
              font-size: 1.5rem;
              color: #000000ad;
            }
            .nav-item {
              padding-left: 1rem !important;
            }
            .nav-item + .nav-item {
              margin-top: 20px;
            }
            .nav-item.active {
              border-top-right-radius: 0px;
              border-bottom-right-radius: 0px;
            }
          }
        `}
      </style>
    </li>
  );
};

export default withRouter(NavItem);
