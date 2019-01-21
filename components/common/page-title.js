export default ({ title }) => {
  return (
    <header className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center display-4">{title}</h1>
      <p className="underline" />
      <style jsx>
        {`
          header {
            height: 150px;
            background-color: rgba(255, 255, 255, 0.9);
            color: #272727;
            margin-top: -150px;
            border-radius: 20px 20px 0 0;
            background: -moz-linear-gradient(
              top,
              rgba(255, 255, 255, 0.9) 50%,
              rgba(255, 255, 255, 1)
            );
            background: -webkit-linear-gradient(
              top,
              rgba(255, 255, 255, 0.9) 50%,
              rgba(255, 255, 255, 1)
            );
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.9) 50%,
              rgba(255, 255, 255, 1)
            );
          }
          h1 {
            font-family: "Sarabun", cursive;
            font-weight: 700;
          }
          .underline {
            width: 100px;
            border-bottom: 3px double #de670b;
          }
          @media (max-width: 575px) {
            h1 {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
    </header>
  );
};
