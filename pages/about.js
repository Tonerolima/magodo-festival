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
      <TopSection imageUrl="https://www.israel21c.org/wp-content/uploads/2018/07/israel-sunset-ashkelon-september-1168x657.jpg" />
      <PageTitle title="About Us" />
      <AboutText />
      <Footer />

      <style jsx>{``}</style>
    </Page>
  );
};
