import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getPaymentById } from "../../payments-api";
import PaymentCard from "../components/PaymentCard/PaymentCard";

const PaymentsDetailsPage = () => {
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { paymentId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [paymentId]);

  return (
    <div>
      <h2>Payment details: {paymentId}</h2>
      {isLoading && <b>Loading payments...</b>}

      {(error && <b>HTTP Error!</b>) ||
        (payment && <PaymentCard payment={payment} />)}

      <ul>
        <li>
          <NavLink to={"client"}>Client Info</NavLink>
        </li>
        <li>
          <NavLink to={"receipt"}>Payment Receipt</NavLink>
        </li>
      </ul>

      <Outlet />
      <Link to={"/payments"}>Go Back</Link>
    </div>
  );
};

export default PaymentsDetailsPage;
