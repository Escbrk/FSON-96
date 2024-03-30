import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/tasksOps.js";
import { useState } from "react";

const TaskEditor = ({ taskId, initialValue, onClose }) => {
  const [text, setText] = useState(initialValue);
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          updateTask({
            text,
            id: taskId,
          })
        )
          .unwrap()
          .then(() => {
            onClose();
          })
          .catch((e) => console.log(e));
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskEditor;
