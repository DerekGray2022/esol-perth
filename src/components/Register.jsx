import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../scss/Register.scss";

const Register = () => {
  return (
    <>
      <Form className="registerForm" action="mailto:esolperth@gmail.com?subject=Registration Request" method="post" encType="text/plain">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            id="name"
            name="Name "
            placeholder="Enter Full Name here..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="Email "
            id="email"
            placeholder="Enter Email here..."
            autoComplete="off"
          />
          <Form.Text className="text-muted">
            We'll never share your details with anyone else.
          </Form.Text>
        </Form.Group>

        <Button className="registerButton" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Register;
