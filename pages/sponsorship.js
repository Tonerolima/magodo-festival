import Page from "../layout/main";
import Nav from "../components/common/navbar";
import TopSection from "../components/common/top-section";
import PageTitle from "../components/common/page-title";
import SponsorshipText from "../components/screens/sponsorship/sponsorship-text";
import Footer from "../components/common/footer";

export default () => {
  return (
    <Page>
      <Nav />
      <TopSection imageUrl="https://www.lawinsport.com/media/zoo/images/Shaking_hands_with_sunlight_in_background_028d63ee94d171476c865289e34464e4.jpg" />
      <PageTitle title="Sponsorship & Donations" />
      <SponsorshipText />
      <Footer />
    </Page>
  );
};
