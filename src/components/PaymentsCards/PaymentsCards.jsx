import { Link, useLocation } from "react-router-dom";

const PaymentsCards = ({ payment: { cardOwner, amount, description, id } }) => {
  const location = useLocation();

  return (
    <div>
      <p>Owner: {cardOwner}</p>
      <p>Amount: {amount}</p>
      <p>Description: {description}</p>
      <Link to={`/payments/${id}`} state={location}>
        Details
      </Link>
      <hr />
    </div>
  );
};

export default PaymentsCards;
