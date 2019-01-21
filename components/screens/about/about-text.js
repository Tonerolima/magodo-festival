import Separator from "../../common/section-separator";

export default () => {
  return (
    <div className="container pb-5 text-justify">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <p className="lead mb-0">
            ​The Magodo cultural day tagged “UNITY IN DIVERSITY” was created in
            a bid to raise the level of cultural consciousness and awareness in
            the estate, while simultaneously encouraging interaction and
            continuous conversation between all residing tribes within the
            estate. With that vision in mind, Magodo cultural day is seen as a
            means to bring together the diverse tribes residing in the estate to
            celebrate their different cultures while also celebrating each tribe
            for its own unique norms, cultural and moral values.
          </p>
          <Separator />
          <p className="lead">
            ​Magodo GRA, ranked as the{" "}
            <a
              href="https://www.pulse.ng/lifestyle/food-travel/pulse-list-5-best-places-to-live-in-lagos/3pkvy4r"
              target="_blank"
            >
              fourth best place to live in Lagos
            </a>{" "}
            by Pulse.ng is an estate that consists of 21 zones, and houses over
            15,000 residents, foreigners and Nigerians alike, with 24/7
            security, easy access to transportation within the estate, good
            roads, good water, and power supply. Magodo is one of the most ideal
            places to live in Lagos, resulting in a lot of ethnicities residing
            within the estate, it is only imperative that they all be
            celebrated.
          </p>
          <p className="lead">
            ​Associated with the Nigerian culture as a whole are music, food,
            fashion, entertainment, art, and business. Magodo Cultural day
            brings all these and more to you in the most aesthetically easing
            way possible.
          </p>
          <p className="font-weight-bold mt-5">
            HERE IN MAGODO, WE ARE PROUD OF OUR CULTURE. UNITY IN DIVERSITY!
          </p>
          <div className="col-lg-10 mx-auto image mt-5" />
          <footer className="blockquote-footer mt-2">
            ​Jade Niboro, Chairman Magodo Residents Association
          </footer>
        </div>
      </div>

      <style jsx>
        {`
          * {
            color: #747474;
            font-family: "Sarabun", cursive;
            font-size: 1.2rem;
          }
          a {
            font-style: italic;
            text-decoration: underline;
          }
          .image {
            height: 400px;
            background: url("https://res.cloudinary.com/tonerolima/image/upload/v1548083804/magodo/jade-niboro.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </div>
  );
};
