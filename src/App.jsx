import "./App.css";
import transactions from "../src/payments.json";

const Payment = ({
  cardNumber,
  cardOwner,
  cardType,
  amount,
  date,
  description,
  isPaid,
}) => {
  return (
    <div>
      <p>Amount: {amount}</p>
      <p>
        Status:{" "}
        <span style={{ color: isPaid ? "green" : "yellow" }}>
          {isPaid ? "Paid" : "Pending"}
        </span>
      </p>
      <p>Description: {description}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Payment Date: {date}</p>
      _______________________________________________
    </div>
  );
};

export const App = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      {transactions.map(
        ({
          id,
          cardNumber,
          cardOwner,
          cardType,
          date,
          amount,
          description,
          isPaid,
        }) => {
          return (
            <li key={id}>
              <Payment
                cardNumber={cardNumber}
                cardOwner={cardOwner}
                cardType={cardType}
                date={date}
                amount={amount}
                description={description}
                isPaid={isPaid}
              />
            </li>
          );
        }
      )}
    </ul>
  );
};
