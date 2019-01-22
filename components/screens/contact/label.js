const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="form-group-label">
      {text}
    </label>
  );
};

export default Label;
