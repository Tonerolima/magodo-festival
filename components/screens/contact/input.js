import { useState } from "react";

const Input = ({ type, name, placeholder, required, setValue, value }) => {
  const [error, setError] = useState("");

  const validate = e => {
    if (e.target.value === "" && e.target.required) {
      return setError(`Please provide a valid ${e.target.name}`);
    }
  };

  const listeners = {
    name,
    value,
    required: required || false,
    onChange: e => setValue(e),
    onFocus: () => setError(""),
    onBlur: e => validate(e),
    className: `form-control form-control-lg ${error ? "is-invalid" : ""}`
  };

  return (
    <>
      {name === "message" ? (
        <textarea rows="5" {...listeners} />
      ) : (
        <input type={type || "text"} placeholder={placeholder} {...listeners} />
      )}
      <div className="invalid-feedback">{error}</div>
    </>
  );
};

export default Input;
