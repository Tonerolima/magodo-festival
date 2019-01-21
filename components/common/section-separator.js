const Separator = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <span className="mx-4 separator">.</span>
      <span className="mx-4 separator">.</span>
      <span className="mx-4 separator">.</span>
      <style jsx>
        {`
          .separator {
            font-size: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Separator;
