import { useState } from "react";

const Input = ({ type, name, placeholder, required }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = e => {
    if (e.target.value === "" && e.target.required) {
      return setError(`Please provide a valid ${e.target.name}`);
    }
  };

  const listeners = {
    value,
    name,
    required: required || false,
    onChange: e => setValue(e.target.value),
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
