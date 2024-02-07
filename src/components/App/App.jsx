import "./App.css";
import transactions from "../../payments.json";
import { PaymentList } from "./PaymentList/PaymentList";

export const App = () => {
  return (
    <PaymentList data={transactions} />
  );
};
