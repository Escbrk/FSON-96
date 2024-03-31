import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/operations.js";
import { useState } from "react";
import TaskEditor from "../TaskEditor/TaskEditor.jsx";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState();
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};

export default Task;
