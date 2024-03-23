import { useDispatch, useSelector } from "react-redux";
import { changeLang, selectLang } from "../../redux/localeSlice";

export default function LangSwitcher() {
  const dispatch = useDispatch();
  const lang = useSelector(selectLang);

  return (
    <div>
      <select
        value={lang}
        onChange={(e) => dispatch(changeLang(e.target.value))}
      >
        <option value="ru">RU</option>
        <option value="pl">PL</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
