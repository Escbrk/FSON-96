import { useSelector } from "react-redux";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.items);
    
    return <ul>
        {tasks.map((task) => {
            <li key={task.id}>
                hello
            </li>
        })}
    </ul>
};

export default TaskList