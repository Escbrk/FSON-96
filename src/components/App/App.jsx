import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../redux/tasksOps";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  useEffect(() => {
    dispatch(fetchTasks())
      .unwrap()
      .then(() => {
        toast.success("fetchTasks fulfilled");
      })
      .catch((e) => {
        toast.error(e);
      });
  }, [dispatch]);

  return (
    <div>
      <h1>HTTP requests with Redux</h1>
      <TaskForm />
      {loading && !error && <Loader>Loader</Loader>}
      {error && <Error>Error message</Error>}
      <Task />
      <Toaster />
    </div>
  );
};

export default App;
