// import PaymentCard from

const PaymentList = () => {
  return (
    <ul>
      {payments.map(({ payment }) => {
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>;
      })}
    </ul>
  );
};
