import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasks/operations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(addTask({ text: form.elements.text.value }));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
