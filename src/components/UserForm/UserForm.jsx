import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import css from "./UserForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required!"),
  email: Yup.string().email("Invalid email").required("Required"),
  role: Yup.string().oneOf(["guest", "user", "admin"]).required("Required"),
});

export default function UserForm() {
  const usernameFieldId = useId();
  const emeilFieldId = useId();
  const roleFieldId = useId();

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "guest",
      }}
      validationSchema={UserSchema}
      onSubmit={(values, actions) => {
        console.log(values);

        localStorage.setItem("data", JSON.stringify(values));

        actions.resetForm();
      }}
    >
      {/* {(props) => {
        console.log(props);
        return (
          <Form className={css.form}>
            <div>
              <label htmlFor={usernameFieldId}>Username</label>
              <br />
              <Field name="username" id={usernameFieldId} />
              <br />
              <ErrorMessage
                name="username"
                component="span"
                className={css.error}
              />
              <br />
              <label htmlFor={emeilFieldId}>Email</label>
              <br />
              <Field type="email" name="email" id={emeilFieldId} />
              <br />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div>
              <label htmlFor={roleFieldId}>Role:</label>
              <br />
              <Field as="select" name="role" id={roleFieldId}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
              </Field>
              <br />
              <ErrorMessage
                name="role"
                component="span"
                className={css.error}
              />
            </div>
            <button type="submit" name="submit">
              Submit
            </button>
          </Form>
        );
      }} */}

      <Form className={css.form}>
        <div>
          <label htmlFor={usernameFieldId}>Username</label>
          <br />
          <Field name="username" id={usernameFieldId} />
          <br />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <br />
          <label htmlFor={emeilFieldId}>Email</label>
          <br />
          <Field type="email" name="email" id={emeilFieldId} />
          <br />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <br />
          <Field as="select" name="role" id={roleFieldId}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </Field>
          <br />
          <ErrorMessage name="role" component="span" className={css.error} />
        </div>
        <button type="submit" name="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
