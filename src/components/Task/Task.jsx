import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksOps";
import { useState } from "react";
import TaskEditor from "../TaskEditor/TaskEditor.jsx";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState();
  const dispatch = useDispatch();

  return (
    <div>
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
