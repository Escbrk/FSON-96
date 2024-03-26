import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../../redux/balanceSlice";
import { useState } from "react";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const [value, setValue] = useState();
  return (
    <div>
      <p>Balance: {balance} $</p>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch(deposit(value))}>Deposit $</button>
      <button onClick={() => dispatch(withdraw(value))}>Withdtraw $</button>
    </div>
  );
};

export default Balance;
