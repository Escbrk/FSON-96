import { useSelector } from "react-redux";

const Balance = () => {
    const balance = useSelector((state) => state.balance.value);
  return (
    <div>
      <p>Balance: {balance}</p>
      <button>Deposit credits</button>
      <button>Withdtraw credits</button>
    </div>
  );
};

export default Balance;
