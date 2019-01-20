import Page from "../layout/main";
import Nav from "../components/common/navbar";
import Showcase from "../components/screens/home/showcase";
import AboutSection from "../components/screens/home/about";
import Schedule from "../components/screens/home/schedule";
import Footer from "../components/common/footer";
import SponsorshipSection from "../components/screens/home/sponsorship-section";

export default () => {
  return (
    <Page>
      <Nav />
      <Showcase />
      <AboutSection />
      <Schedule />
      <SponsorshipSection />
      <Footer />

      <style>
        {`
          #page {
            background-color: #272727;
          }
        `}
      </style>
    </Page>
  );
};
