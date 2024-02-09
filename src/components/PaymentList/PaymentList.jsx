import css from './PaymentList.module.css'
import { Payment } from "../Payment/Payment";

export const PaymentList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map((payment) => {
        return (
          <li className={CSS.item} key={payment.id}>
            <Payment data={payment}/>
          </li>
        );
      })}
    </ul>
  );
};
