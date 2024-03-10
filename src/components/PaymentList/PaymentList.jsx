import PaymentsCards from "../PaymentsCards/PaymentsCards";

const PaymentList = ({ payments }) => {
  return (
    <ul>
      {payments.map((payment) => {
        return (
        <li key={payment.id}>
          <PaymentsCards payment={payment} />
        </li>
        );
      })}
    </ul>
  );
};

export default PaymentList;
