import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { getPaymentById } from "../../payments-api";

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

  const { cardNumber, amount, cardOwner, cardType, date, description, isPaid } =
    payment;

  return (
    <div>
      <h2>Payment details: {paymentId}</h2>
      {isLoading && <b>Loading payments...</b>}
      {error && <b>HTTP Error!</b>}

      {payment && (
        <div style={{ border: "1px solid red", padding: "15px" }}>
          <p>Amount: {amount}</p>
          <p>Card number: {cardNumber}</p>
          <p>Card type: {cardType}</p>
          <p>Card owner: {cardOwner}</p>
          <p>Date: {date}</p>
          <p>Description: {description}</p>
          <p>
            Paid:{" "}
            {(isPaid && <span>Yes!</span>) || (!isPaid && <span>No!</span>)}
          </p>
        </div>
      )}

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
