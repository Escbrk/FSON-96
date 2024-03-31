import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { selectVisibleTasks } from "../../redux/tasksSlice";

const TaskList = () => {
  // const tasks = useSelector(selectTasks);
  // const textFilter = useSelector(selectTextFilter);

  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(textFilter.toLowerCase())
  // );

  const tasks = useSelector(selectVisibleTasks);

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
