import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="my-5 text-white">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 d-flex flex-column text-lg-right align-items-start align-items-lg-end">
            <h1>About the Carnival</h1>
            <p className="underline mb-5" />
            <p className="text mb-5 lead">
              ​Diverse community promotes creativity networking and success.
              Magodo Phase 2 estate represents different backgrounds, languages,
              ethnicities, cultures, and religions. Our culture outlines our
              identity and influences our behavior. Celebrating our cultural
              diversity will make us acknowledge, incorporate and relate with
              others in the estate. We are embracing our diversity. With this
              celebration, our interaction level will increase, more exchange of
              ideas, beliefs and cultural traits et al. We are extending an open
              arm to other cultures and encouraging a healthy exchange of
              cultures and our residents. We are learning to understand our
              beliefs and values better. Come let us make time to appreciate and
              celebrate our culture. Let the world see the unity in our
              diversity
            </p>
            <Link href="/about">
              <button className="btn btn-lg mb-5">
                Read More <i className="fas fa-arrow-right ml-2" />
              </button>
            </Link>
          </div>
          <div className="col-lg-6" />
        </div>
        <div className="row" />
      </div>
      <style jsx>
        {`
          section {
            font-family: "Sarabun", cursive;
          }
          h1 {
            font-weight: 700;
          }
          .underline {
            width: 100px;
            border-bottom: 3px double #ffe400;
          }
          img {
            box-shadow: inset 0px 0px 20px #272727;
          }
          .col-lg-6 + .col-lg-6 {
            background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547908054/magodo/smiling-young-lady.jpg");
            background-position: center;
            box-shadow: inset 0px 0px 20px 20px #272727;
            height: 700px;
            width: 700px;
          }
          .text {
            line-height: 1.5rem;
          }
          .btn {
            background-color: #ffe400;
            color: #747474;
          }
          .btn:hover {
            background-color: #747474;
            color: #ffe400;
          }
        `}
      </style>
    </section>
  );
};

export default AboutSection;
