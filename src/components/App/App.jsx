import LangSwitcher from "../LangSwitcher/LangSwitcher";
import TextInput from "../TextInput/TextInput";
import UserForm from "../UserForm/UserForm";
import LoginForm from "../UserForm/UserForm";
import "./App.css";
import { useState, useEffect } from "react";

// export default function App() {
//   const [lang, setLang] = useState(() => {
//     const savedLang = localStorage.getItem("lang");
//     return savedLang !== null ? savedLang : "en";
//   });

//   useEffect(() => {
//     localStorage.setItem("lang", lang);
//   }, [lang]);

//   return (
//     <div>
//       <p>Selected language: {lang}</p>
//       <LangSwitcher value={lang} onSelect={setLang} />
//     </div>
//   );
// }
//!============================

// export default function App() {
//   const [size, setSize] = useState(() => {
//     const savedSize = localStorage.getItem('size')
//     return savedSize !== null ? savedSize : 'sm'
//   })

//   useEffect(() => {
//     localStorage.setItem('size', size)
//   }, [size])

//   const handleSize = e => {
//     setSize(e.target.value)
//   }

//   return (
//     <>
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={size === "sm"}
//           onChange={handleSize}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={size === "md"}
//           onChange={handleSize}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           checked={size === "lg"}
//           onChange={handleSize}
//         />
//         Large
//       </label>
//     </>
//   );
// }
//!============================
// export default function App() {
//   const [hasAccepted, setHasAccepted] = useState(false);

//   const handleChange = (e) => {
//     setHasAccepted(e.target.checked);
//   };

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button type="button" disabled={!hasAccepted}>
//         Proceed
//       </button>
//     </div>
//   );
// }

//!============================
export default function App() {
  const [text, setText] = useState("qwerty");
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    console.log(user);
    setUser(user);
  };

  return (
    <div>
      <h1>Forms in React</h1>

      {user && (
        <div>
          <p>{user.username}</p>
          <p>{user.role}</p>
        </div>
      )}

      <UserForm onSubmit={saveUser} />

      <hr />
      <TextInput value={text} onChange={setText} />
      <p>{text}</p>
    </div>
  );
}
