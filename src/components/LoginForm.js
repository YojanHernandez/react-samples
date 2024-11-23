// RegisterForm.js
import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <Container className="col-md-6 bg-primary p-4 rounded-2">
      <Form id="loginForm" className="needs-validation">
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label className="form-label text-light">UserName</Form.Label>
          <Form.Control type="text" name="userName" required />
          <Form.Control.Feedback type="valid">
            Looks good!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="form-label text-light">Password</Form.Label>
          <Form.Control type="password" name="password" required />
        </Form.Group>
        <Button type="submit" className="m-auto" variant="light">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
