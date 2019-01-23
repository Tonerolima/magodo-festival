import Page from "../layout/main";
import Nav from "../components/common/navbar";
import TopSection from "../components/common/top-section";
import PageTitle from "../components/common/page-title";
import Footer from "../components/common/footer";
import Form from "../components/screens/contact/contact-form";

export default () => {
  return (
    <Page>
      <Nav />
      <TopSection imageUrl="https://res.cloudinary.com/tonerolima/image/upload/v1548272747/magodo/Fantasy-Beach-Wallpaper-Image.jpg" />
      <PageTitle title="Contact Us" />
      <Form />
      <Footer />
    </Page>
  );
};
