import "../../../static/styles/fonts.css";

const ScheduleDateSection = ({ date }) => {
  return (
    <div className="date-section pt-4 mb-5 px-5 bg-white">
      <p>
        <span className="display-2">{date}</span>
        <span className="h2">
          <em>July</em>
        </span>
      </p>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">8:00 am</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">8:30 am</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">10:30 am</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">12:00 pm</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">2:45 pm</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
        <div className="col-md-6 col-lg-4 mb-5 pl-4">
          <i className="far fa-clock mr-2" />
          <h4 className="d-inline">5:00 pm</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          </p>
        </div>
      </div>
      <style jsx>
        {`
          * {
            font-family: "Sarabun", cursive;
            color: #747474;
          }
          .display-2 {
            font-family: "MyWebFont";
            color: #de670b;
          }
          .h2 {
            margin-left: -10px;
          }
          .col-lg-4 {
            border-left: 1px solid #272727;
          }
          .far {
            font-size: 1.3rem;
            color: #de670b;
            font-family: "Font Awesome 5 Free";
          }
          .date-section {
            box-shadow: 0px 0px 10px #747474;
            border-radius: 10px;
          }
          @media (max-width: 767px) {
            .col-lg-4 {
              border-left: none;
            }
            .date-section {
              padding-left: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScheduleDateSection;
