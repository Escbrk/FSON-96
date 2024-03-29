import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP requests with Redux</h1>
      {loading && !error && <Loader>Loader</Loader>}
      {error && <Error>Error message</Error>}
    </div>
  );
};

export default App;
