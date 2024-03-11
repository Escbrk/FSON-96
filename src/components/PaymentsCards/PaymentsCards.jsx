import { Link } from "react-router-dom";

const PaymentsCards = ({ payment: { cardOwner, amount, description, id } }) => {
  return (
    <div>
      <p>Owner: {cardOwner}</p>
      <p>Amount: {amount}</p>
      <p>Description: {description}</p>
      <Link to={`/payments/${id}`}>Details</Link>
      <hr />
    </div>
  );
};

export default PaymentsCards;
