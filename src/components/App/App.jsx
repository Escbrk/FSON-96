import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP requests with Redux</h1>
      <h2>Hello</h2>
    </div>
  );
};

export default App;
