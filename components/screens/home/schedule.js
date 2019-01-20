import "../../../static/styles/fonts.css";
import ScheduleDateSection from "./schedule-date-section";

const Schedule = () => {
  return (
    <section>
      <div className="py-5 overlay w-100 h-100">
        <div className="container">
          <h1 className="text-white">Schedule</h1>
          <p className="underline mb-5" />
          <ScheduleDateSection date="19 " />
          <ScheduleDateSection date="20 " />
        </div>
      </div>
      <style jsx>
        {`
          * {
            font-family: "Sarabun", cursive;
            color: #272727;
          }

          section {
            background: url("https://res.cloudinary.com/tonerolima/image/upload/v1547896709/magodo/main-bg2.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
          .overlay {
            background: rgba(0, 0, 0, 0.7);
          }
          h1 {
            font-weight: 700;
            font-family: "Sarabun", cursive;
            color: #272727;
          }
          .display-2 {
            font-family: "MyWebFont";
          }
          .underline {
            width: 100px;
            border-bottom: 3px double #ffe400;
          }

          .col-lg-4 {
            border-left: 1px solid #272727;
          }
          .far {
            font-size: 1.3rem;
            color: #747474;
          }

          @media (max-width: 767px) {
            .col-lg-4 {
              border-left: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Schedule;
