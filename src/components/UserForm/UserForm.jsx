import { useId } from "react";
import { Field, Form, Formik } from "formik";

export default function UserForm({ onSubmit }) {
  const usernameFieldId = useId();
  const emeilFieldId = useId();
  const roleFieldId = useId();

  const submit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={submit}
    >
      <Form>
        <div>
          <label htmlFor={usernameFieldId}>Username</label>
          <br />
          <Field name="username" id={usernameFieldId} />
          <br />
          <label htmlFor={emeilFieldId}>Email</label>
          <br />
          <Field type="email" name="email" id={emeilFieldId} />
        </div>

        {/* <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <br />
          <select name="role" id={roleFieldId}>
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}
        <button type="submit" name="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
