import { useEffect, useState } from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import { getPayments } from "../../payments-api";
import { useSearchParams } from "react-router-dom";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params, setParams] = useSearchParams();
  console.log(params)

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Payments Page!</h1>
      <b>Filter by owner</b>
      <input type="text" />
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP Error!</b>}
      <PaymentList payments={payments} />
    </div>
  );
};

export default PaymentsPage;
