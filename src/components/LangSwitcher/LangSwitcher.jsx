export default function LangSwitcher({ lang, onSelect }) {
  return (
    <select value={lang} onChange={(e)=> {onSelect(e.target.value)}}>
      <option value="ru">Russian</option>
      <option value="en">English</option>
      <option value="pl">Polish</option>
    </select>
  );
}
