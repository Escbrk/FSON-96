import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import PaymentsPage from "../../pages/PaymentsPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PaymentsDetailsPage from "../../pages/PaymentsDetailsPage";
import ClientInfo from "../ClientInfo/ClientInfo";
import PaymentReceipt from "../PaymentReceipt/PAymentReceipt";

const App = () => {
  return (
    <div>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentsDetailsPage />}>
          <Route path="client" element={<ClientInfo />} />
          <Route path="receipt" element={<PaymentReceipt />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
