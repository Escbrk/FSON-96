import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectTasks } from "../../redux/tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);

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
