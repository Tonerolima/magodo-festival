const Event = () => {
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h3>​Upcoming Event:</h3>
        <p className="underline mb-4" />
        <h4 className="mb-4">​Magodo Cultural Day 2019</h4>
        <div className="mb-5">
          <ul className="pl-4">
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Cultural road shows
            </li>
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Traditional dance from the six geopolitical zones
            </li>
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Lecture
            </li>
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Traditional fashion parades
            </li>
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Talents hunts
            </li>
            <li>
              <i className="fas fa-arrow-right mr-2" />
              Artist performance
            </li>
          </ul>
          And lots more.....
        </div>
        <p>
          <i className="fas fa-map-marker-alt mr-2" />
          <strong>Venue:</strong> Supreme Educational Foundation School
        </p>
        <p>
          <i className="fas fa-calendar-alt mr-2" />
          <strong>Date:</strong> 19th and 20th April 2019
        </p>
        <p>
          <i className="far fa-clock mr-2" />
          <strong>Time:</strong> 8:00 am
        </p>
        <div className="my-5">
          <p>
            <strong>
              All residents to pick up their pass at their zonal offices
            </strong>
          </p>
          <p>
            <i>Free meal for the first 2000 adults</i>
          </p>
          <p>
            <i>Free snacks and drinks for the first 2,000 kids</i>
          </p>
          <p>
            <i>
              Lots of gift to the won. Pick up your lottery tickets at all
              selling point for just N500 per ticket to win fantastic prices
            </i>
          </p>
        </div>
        <p>For traditional costume booking, kindly contact</p>
        <h5 className="mb-3">AFRIQUECON A-Z</h5>
        <p>
          <i className="fas fa-phone mr-2 fa-rotate-90" />
          08034246656
        </p>
        <p>
          <i className="fas fa-phone mr-2 fa-rotate-90" />
          08177089730
        </p>
        <p className="mt-5">DON'T MISS THIS COLORFUL OCCASION!</p>
      </div>

      <style jsx>
        {`
          * {
            color: #747474;
            font-family: "Sarabun", cursive;
          }
          p:not(.lead) {
            font-size: 1.1rem;
          }
          ul {
            list-style-type: none;
          }
          li {
            margin-bottom: 0.5rem;
          }
          .fas,
          .far {
            font-family: "Font Awesome 5 Free";
            color: #de670b;
          }
          .underline {
            width: 100px;
            border-bottom: 3px double #de670b;
          }
        `}
      </style>
    </div>
  );
};

export default Event;
