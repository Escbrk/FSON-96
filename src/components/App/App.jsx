import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import NotFound from "../../pages/NotFound";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const TasksPage = lazy(() => import("../../pages/Tasks"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // qwe@qwe.cpm

  // useEffect(() => {
  //   if (token !== null) {
  //     dispatch(refreshUser());
  //   }
  // }, [dispatch, token]);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/tasks"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/tasks" />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute component={<TasksPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </Layout>
  );
};

export default App;
