import { useContext } from "react";
import langContext from "../lang-context";

const LangSwitcher = () => {
  const ctxValue = useContext(langContext);
  return (
    <select value={ctxValue.lang} onChange={e => ctxValue.changeLang(e.target.value)}>
      <option value="en">EN</option>
      <option value="pl">PL</option>
      <option value="ru ">RU</option>
    </select>
  );
};

export default LangSwitcher;
