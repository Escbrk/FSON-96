import LoginForm from "../LoginForm/LoginForm";
import "./App.css";
import { useId } from "react";
import { useState } from "react";

const MyComponent = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Text field label</label>
      <input type="text" id={id} />
    </div>
  );
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default function App() {
  const handleLogin = (userData) => {
    console.log(userData);
  };
  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onSubmit={handleLogin} />
      <MyComponent />
      <SearchBar/>
    </div>
  );
}
//!============================
