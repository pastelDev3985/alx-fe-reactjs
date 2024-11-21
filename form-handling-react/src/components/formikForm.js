import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // validation using yup
  const validation = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string()

      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Initial form values
  const initailValues = {
    username: "",
    email: "",
    password: "",
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    alert("Form submitted:", values);
    resetForm();
  };
};
return (
  <>
    <h1>Registration Form</h1>
    <Formik
      initialValues={initailValues}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Username:
              <Field
                type="text"
                name="username"
                style={{
                  display: "block",
                  margin: "10px 0",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </label>
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Email:
              <Field
                type="email"
                name="email"
                style={{
                  display: "block",
                  margin: "10px 0",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </label>
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Password:
              <Field
                type="password"
                name="password"
                style={{
                  display: "block",
                  margin: "10px 0",
                  width: "100%",
                  padding: "8px",
                }}
              />
            </label>
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "14px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  </>
);
export default FormikForm;
