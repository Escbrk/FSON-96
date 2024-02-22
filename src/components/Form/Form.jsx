import { FaTshirt } from "react-icons/fa";
import { useState } from "react";

const initialValues = {
  size: "xs",
  color: "white",
};

export default function Form() {
  const [state, setState] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState(initialValues);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FaTshirt size={100} color={state.color} />

      <select name="size" value={state.size} onChange={handleChange}>
        <option value="xxs">XXS</option>
        <option value="xs">XS</option>
        <option value="s">S</option>
      </select>

      <select name="color" value={state.color} onChange={handleChange}>
        <option value="yellow">Yellow</option>
        <option value="white">White</option>
        <option value="red">Red</option>
      </select>

      <button>Submit</button>
    </form>
  );
}
