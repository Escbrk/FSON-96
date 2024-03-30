import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksOps";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{}</p>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default Task;
