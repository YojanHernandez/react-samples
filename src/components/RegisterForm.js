// RegisterForm.js
import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import utils from "../utils/utils";

function RegisterForm() {
  return (
    <Container className="col-md-8 bg-primary p-4 rounded mb-5">
      <Form id="registerForm">
        <Row className="gx-3 mb-2">
          <Col md={6}>
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Label className="text-light">Full name</Form.Label>
              <Form.Control type="text" name="fullName" required />
              <div className="error-message" id="fullNameError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control type="email" name="email" required />
              <div className="error-message" id="emailError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="documentType">
              <Form.Label className="text-light">Document type</Form.Label>
              <Form.Select name="documentType" required>
                <option value="default" selected>
                  Select document
                </option>
                <option value="CC">CC</option>
                <option value="DNI">DNI</option>
                <option value="Passport">Passport</option>
              </Form.Select>
              <div className="error-message" id="documentTypeError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control type="password" name="password" required />
              <div className="password-strength" id="passwordStrength"></div>
              <div className="error-message" id="passwordError"></div>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label className="text-light">Phone</Form.Label>
              <Form.Control type="text" name="phone" required />
              <div className="error-message" id="phoneError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="userName">
              <Form.Label className="text-light">User Name</Form.Label>
              <Form.Control type="text" name="userName" required />
              <div className="error-message" id="usernameError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="documentNumber">
              <Form.Label className="text-light">Document number</Form.Label>
              <Form.Control type="text" name="documentNumber" required />
              <div className="error-message" id="documentNumberError"></div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label className="text-light">Confirm Password</Form.Label>
              <Form.Control type="password" name="confirmPassword" required />
              <div className="error-message" id="confirmPasswordError"></div>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-center">
          <Button type="submit" className="bg-light fw-bold w-50 text-dark">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default RegisterForm;
