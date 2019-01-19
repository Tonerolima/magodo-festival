import "../../../static/styles/fonts.css";
import ScheduleDateSection from "./schedule-date-section";

const Schedule = () => {
  return (
    <section className="py-5 bg-white text-white">
      <div className="container pt-5">
        <h1>Schedule</h1>
        <p className="underline mb-5" />
        <ScheduleDateSection date="19 " />
        <ScheduleDateSection date="20 " />
      </div>
      <style jsx>
        {`
          * {
            font-family: "Sarabun", cursive;
            color: #272727;
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
