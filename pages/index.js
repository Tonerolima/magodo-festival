import "bootstrap/dist/css/bootstrap.min.css";
import "../static/styles/hamburger.css";
import Page from "../layout/main";
import Nav from "../components/common/navbar";
import Showcase from "../components/screens/home/showcase";

export default () => {
  return (
    <Page>
      <Nav />
      <Showcase />
    </Page>
  );
};
