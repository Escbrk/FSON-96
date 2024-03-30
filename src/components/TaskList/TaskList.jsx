import { useSelector } from "react-redux";
import Task from "../Task/Task";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>

  );
};

export default TaskList;
