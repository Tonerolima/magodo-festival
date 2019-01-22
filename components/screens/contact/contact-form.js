import { useState } from "react";
import querystring from "querystring";
import Label from "./label";
import InputGroup from "./input-group";
import Input from "./input";

const Form = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    return setState({ ...state, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: ""
    });
    setStatus("");
  };

  const handleSubmit = e => {
    e.preventDefault();
    const body = querystring.stringify({ "form-name": "contact", ...state });
    fetch("/", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then(() => {
        setStatus("sent");
        setTimeout(() => reset(), 3000);
      })
      .catch(error => {
        setError("Something went wrong, please try again!");
        setTimeout(() => setError(""), 6000);
      });
  };

  return (
    <div className="container py-5">
      <form
        action=""
        className="mx-auto col-lg-10"
        onSubmit={e => handleSubmit(e)}
        data-netlify={true}
        name="contact"
        data-netlify-honeypot="bot-field"
      >
        <div className="form-row">
          <div className="form-group col-md-6">
            <Label text="Firstname" htmlFor="firstname" />
            <InputGroup iconClass="far fa-user">
              <Input
                setValue={handleChange}
                value={state.firstname}
                name="firstname"
                placeholder="Elizabeth"
                required={true}
              />
            </InputGroup>
          </div>

          <div className="form-group col-md-6">
            <Label text="Lastname" htmlFor="lastname" />
            <InputGroup iconClass="far fa-user">
              <Input
                setValue={handleChange}
                value={state.lastname}
                name="lastname"
                placeholder="Adebiyi"
                required={true}
              />
            </InputGroup>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <Label text="Phone Number" htmlFor="phone" />
            <InputGroup iconClass="fas fa-phone fa-rotate-90">
              <Input
                setValue={handleChange}
                value={state.phone}
                type="tel"
                name="phone"
                placeholder="08012345678"
              />
            </InputGroup>
          </div>

          <div className="form-group col-md-6">
            <Label text="Email Address" htmlFor="email" />
            <InputGroup iconClass="fas fa-at">
              <Input
                setValue={handleChange}
                value={state.email}
                type="email"
                name="email"
                placeholder="elizabeth@example.com"
                required={true}
              />
            </InputGroup>
          </div>
        </div>
        <div className="form-group">
          <Label text="Message" htmlFor="message" />
          <Input
            setValue={handleChange}
            value={state.message}
            name="message"
            required={true}
          />
        </div>
        <input type="hidden" name="form-name" value="contact" />
        {error ? <p className="form-text text-danger">{error}</p> : null}
        <button className={`btn btn-lg ${status}`} type="submit">
          {status ? (
            <div>
              Sent
              <i className="fas fa-check ml-2" />
            </div>
          ) : (
            <div>
              Send
              <i className="far fa-paper-plane ml-2" />
            </div>
          )}
        </button>
      </form>
      <style jsx>
        {`
          button {
            background-color: #ffe400;
            color: #747474;
          }
          button.sent {
            background-color: #14a76c;
            color: #fff;
          }
          .fas,
          .far {
            font-family: "Font Awesome 5 Free";
          }
        `}
      </style>
    </div>
  );
};

export default Form;
