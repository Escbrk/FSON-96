import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";

const ClientInfo = lazy(() => import("../ClientInfo/ClientInfo"));
const PaymentReceipt = lazy(() => import("../PaymentReceipt/PAymentReceipt"));

const HomePage = lazy(() => import("../../pages/HomePage"));
const PaymentsPage = lazy(() => import("../../pages/PaymentsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const PaymentsDetailsPage = lazy(() =>
  import("../../pages/PaymentsDetailsPage")
);

const App = () => {
  return (
    <div>
      <h1>React Router</h1>

      <Navigation />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentsDetailsPage />}>
            <Route path="client" element={<ClientInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
