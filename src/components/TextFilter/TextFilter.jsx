import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filterSlice";


const TextFilter = () => {
  const id = useId();
  const value = useSelector(selectTextFilter);

  const dispatch = useDispatch();

  return (
    <div>
      <label htmlFor={id}>Filter by text</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={(e) => dispatch(changeTextFilter(e.target.value))}
      />
    </div>
  );
};

export default TextFilter;
