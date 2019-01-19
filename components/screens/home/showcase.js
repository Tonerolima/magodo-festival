import "../../../static/styles/fonts.css";

const Showcase = () => {
  return (
    <section>
      <div className="overlay w-100 h-100">
        <div className="container h-100 d-flex flex-column justify-content-center text-center">
          <h1 className="display-2 mb-0">Magodo Phase 2 Cultural Day</h1>
          <p className="lead">Unity In Diversity</p>
        </div>
      </div>

      <style jsx>
        {`
          section {
            height: 600px;
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
            // text-stroke: 2px #ffe400;
            text-shadow: -1px -1px 0 #ffe400, 1px -1px 0 #ffe400,
              -1px 1px 0 #ffe400, 1px 1px 0 #ffe400;
            font-family: "MyWebFont";
          }
          .lead {
            font-size: 2.5rem;
            color: #14a76c;
            // font-weight: bold;
            font-family: "Righteous", cursive;
            text-shadow: -1px -1px 0 #272727, 1px -1px 0 #272727,
              -1px 1px 0 #272727, 1px 1px 0 #272727;
          }
          .overlay {
            background: #27272788;
          }

          @media (max-width: 575px) {
            h1 {
              font-size: 3.5rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Showcase;
