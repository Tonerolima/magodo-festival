import "../static/styles/hamburger.css";
import Page from "../layout/main";
import Nav from "../components/common/navbar";
import TopSection from "../components/screens/about/top-section";
import PageTitle from "../components/screens/about/page-title";
import AboutText from "../components/screens/about/about-text";
import Footer from "../components/common/footer";

export default () => {
  return (
    <Page>
      <Nav />
      <TopSection />
      <PageTitle />
      <AboutText />
      <Footer />

      <style jsx>{``}</style>
    </Page>
  );
};
