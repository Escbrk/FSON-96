import { useSelector } from "react-redux";
import Balance from "../Balance/Balance";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import "./App.css";
import { selectLang } from "../../redux/localeSlice";

const App = () => {
  const lang = useSelector(selectLang);

  return (
    <div>
      <h1>React Redux</h1>
      <Balance />

      <LangSwitcher />
      <p>Select lang: {lang} </p>
    </div>
  );
};

export default App;
