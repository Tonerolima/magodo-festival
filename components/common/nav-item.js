import Link from "next/link";
import { withRouter } from "next/router";

const NavItem = ({ router: { pathname }, text, url }) => {
  const active = pathname === url ? "active" : "";
  return (
    <li className={`nav-item pl-2 mr-2 ${active}`}>
      <Link href={url}>
        <a className="nav-link py-0">{text}</a>
      </Link>
      <style jsx>
        {`
          a.nav-link {
            text-decoration: none;
            font-size: 1.2rem;
            color: #fff;
            font-weight: bold;
          }
          a.nav-link:hover {
            color: #0fbfff22;
          }
          .nav-item.active {
            border-left: 4px solid #0fbfff;
          }
          @media (max-width: 991px) {
            a.nav-link {
              font-size: 1.5rem;
              color: #000000ad;
            }
            .nav-item + .nav-item {
              margin-top: 20px;
            }
          }
        `}
      </style>
    </li>
  );
};

export default withRouter(NavItem);
