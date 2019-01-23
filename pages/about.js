import Page from "../layout/main";
import Nav from "../components/common/navbar";
import TopSection from "../components/common/top-section";
import PageTitle from "../components/common/page-title";
import AboutText from "../components/screens/about/about-text";
import Footer from "../components/common/footer";

export default () => {
  return (
    <Page>
      <Nav />
      <TopSection imageUrl="https://res.cloudinary.com/tonerolima/image/upload/v1548270917/magodo/magodo-estate-front-gate.jpg" />
      <PageTitle title="About Us" />
      <AboutText />
      <Footer />
    </Page>
  );
};
