import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";
import Loader from "../Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP requests with Redux</h1>
      {loading && <Loader>Loader</Loader>}
    </div>
  );
};

export default App;
