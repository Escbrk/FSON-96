import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import PaymentsPage from "../../pages/PaymentsPage";
import NotFound from "../../pages/NotFound";

const App = () => {
  return (
    <div>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
