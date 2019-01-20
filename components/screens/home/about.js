import "../../../static/styles/fonts.css";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="my-5 text-white">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 d-flex flex-column text-right align-items-end">
            <h1>About the Carnival</h1>
            <p className="underline mb-5" />
            <p className="text mb-5">
              The contemporary and traditional street carnival show will involve
              the display of beautiful costumes by the contingents. This costume
              includes the Western costumes used in carnivals like Notting Hill
              carnival, Rio carnival, Trinidad carnival and our own Calabar
              carnival. The costumes are created with accessories like
              artificial feathers, glittering accessories, exotic sequence
              materials of different colours and lots more. All these are
              combined to bring out the aesthetics created by the designer to
              make the carnival colorful. The designs are of different shapes
              and styles like flowing gowns, miniskirts, flamboyant head hats
              etc.to suite the purpose of the display. The traditional costumes
              will involve the display of our own indigenous wears here in
              Nigeria, thereby paying attention to the six Geo-political zones.
              Difference kinds of dances are displayed as the contingent’s
              dances to different recorded or live music which could be
              contemporary or traditional songs. The displays will also involve
              calisthenics of different formation from street to street within
              Magodo to promote cultural unity.
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
