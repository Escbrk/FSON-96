import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksOps";
import { useState } from "react";
import { updateTask } from "../../redux/tasksOps.js";

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

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      {/* {isEditing ? (
        <TaskEditor initialValue={task} taskId={task.id} />
      ) : (
        <p onClick={() => setIsEditing(true)}>{task.text}</p>
      )} */}
      {isEditing ? (
        <TaskEditor
          initialValue={task.text}
          taskId={task.id}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <p onClick={() => setIsEditing(true)}>{task.text}</p>
      )}
      {!isEditing && (
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      )}
    </div>
  );
};

export default Task;
