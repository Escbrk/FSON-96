import "./App.css";
import transactions from "../../payments.json";
import { Payment } from "./Payment/Payment";

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
