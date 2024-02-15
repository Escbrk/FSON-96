import { useId } from "react";

export default function LoginForm({ onSubmit }) {
  const loginId = useId();
  const passwordId = useId();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const { login, password } = form.elements;

//     onSubmit({
//       login: login.value,
//       password: password.value,
//     });

//     form.reset();
//   };

  return (
    <form>
      {/* <label htmlFor={loginId}>Login</label> */}
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
}
