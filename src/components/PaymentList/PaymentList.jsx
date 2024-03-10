import PaymentCard from "../PaymentsCard/PaymentsCard";

const PaymentList = ({ payments }) => {
  return (
    <ul>
      {payments.map((payment) => {
        return (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
        );
      })}
    </ul>
  );
};

export default PaymentList;
