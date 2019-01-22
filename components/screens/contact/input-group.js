const InputGroup = ({ iconClass, children }) => {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={iconClass} />
        </span>
      </div>
      {children}

      <style jsx>
        {`
          .input-group-text {
            background-color: #747474;
            color: #fff;
            width: 40px;
            border: 1px solid #747474;
          }
        `}
      </style>
    </div>
  );
};

export default InputGroup;
