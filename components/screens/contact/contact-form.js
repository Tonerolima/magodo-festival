import Label from "./label";
import InputGroup from "./input-group";
import Input from "./input";

const Form = () => {
  return (
    <div className="container py-5">
      <form action="" className="mx-auto col-lg-10" data-netlify="true">
        <div className="form-row">
          <div className="form-group col-md-6">
            <Label text="Firstname" htmlFor="firstname" />
            <InputGroup iconClass="far fa-user">
              <Input name="firstname" placeholder="Elizabeth" required={true} />
            </InputGroup>
          </div>

          <div className="form-group col-md-6">
            <Label text="Lastname" htmlFor="lastname" />
            <InputGroup iconClass="far fa-user">
              <Input name="lastname" placeholder="Adebiyi" required={true} />
            </InputGroup>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <Label text="Phone Number" htmlFor="phone" />
            <InputGroup iconClass="fas fa-phone fa-rotate-90">
              <Input type="tel" name="phone" placeholder="08012345678" />
            </InputGroup>
          </div>

          <div className="form-group col-md-6">
            <Label text="Email Address" htmlFor="email" />
            <InputGroup iconClass="fas fa-at">
              <Input
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
          <Input name="message" required={true} />
        </div>
        <button className="btn btn-lg" type="submit">
          Send
          <i className="far fa-paper-plane ml-2" />
        </button>
      </form>
      <style jsx>
        {`
          button[type="submit"] {
            background-color: #ffe400;
            color: #747474;
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
