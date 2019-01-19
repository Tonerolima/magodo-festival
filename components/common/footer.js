export default () => {
  return (
    <div className="py-4 text-white">
      <div className="container d-flex justify-content-between">
        <p className="m-0">Copyright &copy; MRA {new Date().getFullYear()}</p>
        <p className="m-0 d-none d-md-inline-block">
          <em>Designed by:</em>{" "}
          <a href="https://tonerolima.netlify.com" target="_blank">
            Anthony Oyathelemhi
          </a>
        </p>
      </div>
    </div>
  );
};
