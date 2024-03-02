// import { Field, Form, Formik } from "formik";
// import toast, { Toaster } from "react-hot-toast";
// import * as Yup from "yup";

// // const notify = () =>
// //   toast("❌This field can't be empty!❌", {
// //     icon: "",
// //   });

// const notify = () => toast.error("This field can't be empty!");

// const validationSchema = Yup.object().shape({
//   query: Yup.string().min(1, "Too Short! ❌").required(notify),
// });

// const SearchForm = ({ onSearch, data }) => {
//   return (
//     <Formik
//       initialValues={{ query: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values, actions) => {
//         actions.resetForm();

//         if (data.length === 0) {
//           toast.error("🤷‍♂️Sorry, we found nothing🤷‍♂️");
//         }

//         if (values.query.trim() === "") {
//           notify();
//           return;
//         } else {
//           onSearch(values.query);
//         }
//       }}
//     >
//       <Form>
//         <Toaster />
//         <Field name="query" />
//         <button type="submit">Search</button>
//       </Form>
//     </Formik>
//   );
// };

// export default SearchForm;

import { Field, Form, Formik } from "formik";
import { createContext, useContext, useState } from "react";

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;

//*=======================================
//* Приммер работы Formik через Context

// const formCtx = createContext();

// const MyFormik = ({ initialValues, onSubmit, children }) => {
//   const [state, setState] = useState(initialValues);
//   return (
//     <formCtx.Provider value={{ state, onSubmit }}>{children}</formCtx.Provider>
//   );
// };

// const Form = ({ children }) => {
//   const ctx = useContext(formCtx);

//   const ctx = useContext(formCtx);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     ctx.onSubmit(ctx.state);
//   };

//   return <form onSubmit={handleSubmit}>{children}</form>;
// };

// const Field = ({ name }) => {
//   const ctx = useContext(formCtx);
//   return <input type="text" name={name} value={ctx.state[name]} />;
// };

//*=======================================
