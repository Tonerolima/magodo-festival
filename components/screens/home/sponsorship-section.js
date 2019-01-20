import Link from "next/link";

const SponsorshipSection = () => {
  return (
    <section className="bg-white text-right pt-5">
      <div className="container py-5">
        <div className="row px-4 flex-column justify-content-center align-items-end">
          <h1>Sponsorship & Donations</h1>
          <p className="underline mb-4" />
          <p className="text">
            Magodo cultural day is a great opportunity for your brand to
            showcase itself to one of the largest enclosed communities in the
            state, therefore inevitably increasing the level of recognition and
            respect accorded your brand and what better way to be involved in
            this project than by being one of the reasons why it came to the
            realization. And how can your brand be one of the reasons for that?
          </p>
          <Link href="/sponsorship">
            <button className="btn btn-lg">
              Learn More <i className="fas fa-arrow-right ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          h1 {
            font-weight: 700;
            font-family: "Sarabun", cursive;
            color: #272727;
          }
          .underline {
            width: 100px;
            border-bottom: 3px double #ffe400;
          }
          .text {
            line-height: 1.5rem;
            font-size: 1.1rem;
            color: #747474;
          }
          .btn {
            background-color: #ffe400;
            color: #747474;
          }
          .btn:hover {
            background-color: #747474;
            color: #ffe400;
          }
          section {
            font-family: "Sarabun", cursive;
            height: 800px;
            background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547914139/magodo/edo-royals.jpg"),
              url("https://res.cloudinary.com/tonerolima/image/upload/v1547913894/magodo/smiling-ladies.jpg"),
              url("https://res.cloudinary.com/tonerolima/image/upload/v1547914311/magodo/happy-woman.jpg"),
              url("https://res.cloudinary.com/tonerolima/image/upload/v1547839372/magodo/southern-men.jpg"),
              url("https://res.cloudinary.com/tonerolima/image/upload/v1547914313/magodo/ladies-in-white.jpg");
            background-position: 0% 100%,25% 90%,50% 100%,75.5% 90%, 100% 100%;
            background-size: 20.5% 50%;
            background-repeat: no-repeat;
            box-shadow: inset 0px -70px 100px 47px #fff;
          }
          @media (max-width: 1140px) {
            section {
              background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547914139/magodo/edo-royals.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547913894/magodo/smiling-ladies.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547914311/magodo/happy-woman.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547839372/magodo/southern-men.jpg");
              background-position: 0% 100%, 34% 90%, 66% 100%, 100% 90%;
              background-size: 25.5% 50%;
              background-repeat: no-repeat;
          }
          @media (max-width: 991px) {
            section {
              background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547913894/magodo/smiling-ladies.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547914311/magodo/happy-woman.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547839372/magodo/southern-men.jpg");
              background-position: 0% 90%, 50% 100%, 100% 90%;
              background-size: 33.5% 50%;
              background-repeat: no-repeat;
          }
          @media (max-width: 767px) {
            section {
              background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547914139/magodo/edo-royals.jpg"),
                url("https://res.cloudinary.com/tonerolima/image/upload/v1547913894/magodo/smiling-ladies.jpg");
              background-position: 0% 100%, 100% 90%;
              background-size: 50.5% 50%;
              background-repeat: no-repeat;
            }
          }
          @media (max-width: 575px) {
            section {
              background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547913894/magodo/smiling-ladies.jpg");
              background-position: 0% 100%;
              background-size: 100% 50%;
              background-repeat: no-repeat;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SponsorshipSection;
