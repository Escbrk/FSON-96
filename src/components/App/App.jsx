import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <div>
      <h1>react router</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/payments" element={<div>Payments page</div>} />
        <Route path="*" element={ <div>404 Not Found!</div>} />
      </Routes>
    </div>
  );
};

export default App;
