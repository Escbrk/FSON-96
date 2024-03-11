import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getPaymentById } from "../../payments-api";
import PaymentCard from "../components/PaymentCard/PaymentCard";

const PaymentsDetailsPage = () => {
  const [payment, setPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { paymentId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/payments");

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

      <Link to={backLinkRef.current}>⬅️Go Back</Link>
      {(payment && <PaymentCard payment={payment} />) ||
        (error && <b>HTTP Error!</b>)}

      <ul>
        <li>
          <NavLink to={"client"}>Client Info</NavLink>
        </li>
        <li>
          <NavLink to={"receipt"}>Payment Receipt</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>LOADING SUB COMPONENTS...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default PaymentsDetailsPage;
