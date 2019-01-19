import "../../../static/styles/fonts.css";

const Showcase = () => {
  return (
    <section>
      <div className="overlay w-100 h-100">
        <div className="container h-100 d-flex flex-column justify-content-center text-center">
          <h1 className="display-2 mb-0">Magodo Phase 2 Cultural Day</h1>
          <p className="lead">Unity In Diversity</p>
          <div className="address date-address p-2 mx-auto mt-5">
            <i className="fas fa-map-marker-alt" />
            <span>Supreme Educational Foundation School Sport Field</span>
          </div>
          <div className="date date-address p-2 mx-auto">
            <i className="fas fa-calendar-alt" />
            <span>19 - 20 April, 2019. 8:00am</span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          section {
            height: 700px;
            background-image: url("https://res.cloudinary.com/tonerolima/image/upload/v1547839024/magodo/main-bg.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            // background-attachment: fixed;
            background-position: center;
            border-radius: 0px 0px 138px 0px;
            -moz-border-radius: 0px 0px 138px 0px;
            -webkit-border-radius: 0px 0px 138px 0px;
            border: 0px solid #000000;
            overflow: hidden;
          }
          h1 {
            color: #272727;
            text-shadow: -1px -1px 0 #ffe400, 1px -1px 0 #ffe400,
              -1px 1px 0 #ffe400, 1px 1px 0 #ffe400;
            font-family: "MyWebFont";
          }
          .lead {
            font-size: 2.5rem;
            color: #14a76c;
            font-family: "Righteous", cursive;
            text-shadow: -1px -1px 0 #272727, 1px -1px 0 #272727,
              -1px 1px 0 #272727, 1px 1px 0 #272727;
          }
          .date-address {
            position: relative;
            height: 0px;
            font-size: 1.2rem;
            color: #ddd;
            font-family: "Sarabun", cursive;
          }
          .address {
            width: 310px;
            border-top: 72px solid #de670b;
            border-left: 14px solid transparent;
            border-right: 0px solid transparent;
          }
          .address > span,
          .fa-map-marker-alt {
            position: absolute;
            bottom: 30px;
            left: 0px;
          }
          .fa-map-marker-alt {
            left: 5px;
          }
          .fas {
            font-size: 1.6rem;
          }
          .date {
            width: 300px;
            background-color: none;
            top: -3px;
            border-top: 0px transparent;
            border-left: 9px solid transparent;
            border-right: 22px solid transparent;
            border-bottom: 50px solid #14a76c;
            margin-top: -35px;
          }
          .date > span,
          .fa-calendar-alt {
            position: absolute;
            bottom: -40px;
            left: 40px;
          }
          .fa-calendar-alt {
            left: 5px;
          }
          .overlay {
            background: #27272788;
          }

          @media (max-width: 575px) {
            h1 {
              font-size: 3.5rem;
            }
            section {
              height: 100vh;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Showcase;
