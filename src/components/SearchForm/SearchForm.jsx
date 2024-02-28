import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

// const notify = () =>
//   toast("❌This field can't be empty!❌", {
//     icon: "",
//   });

const notify = () => toast.error("This field can't be empty!");

const validationSchema = Yup.object().shape({
  query: Yup.string().min(1, "Too Short! ❌").required(notify),
});

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();

        if (values.query.trim() === "") {
          notify();
          return;
        } else {
          onSearch(values.query);
        }
      }}
    >
      <Form>
        <Toaster />
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
