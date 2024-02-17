import { useId } from "react";

export default function LangSwitcher({ value, onSelect }) {
  const selectId = useId();

  return (
    <div>
      {/* <label htmlFor={selectId}>Choose language</label> */}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
