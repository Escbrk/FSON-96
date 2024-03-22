import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/store";

const Balance = () => {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.balance.value);
  return (
    <div>
      <p>Balance: {balance}</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit credits</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdtraw credits</button>
    </div>
  );
};

export default Balance;
