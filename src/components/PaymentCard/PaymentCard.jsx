const PaymentCard = ({
  payment: {
    amount,
    cardNumber,
    cardType,
    cardOwner,
    date,
    description,
    isPaid,
  },
}) => {
  return (
    <div
      style={{
        border: "1px solid red",
        padding: "15px",
        width: "300px",
        borderRadius: "20px",
      }}
    >
      <p>Amount: {amount}</p>
      <p>Card number: {cardNumber}</p>
      <p>Card type: {cardType}</p>
      <p>Card owner: {cardOwner}</p>
      <p>Date: {date}</p>
      <p>Description: {description}</p>
      <p>
        Paid: {(isPaid && <span>Yes!</span>) || (!isPaid && <span>No!</span>)}
      </p>
    </div>
  );
};

export default PaymentCard;
