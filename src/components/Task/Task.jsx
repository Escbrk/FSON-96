import css from "./Task.module.css";

export default function Task({ data, onDelete }) {
  return (
    <div className={css.container}>
      <p>{data.text}</p>
      <button onClick={()=>{onDelete(data.id)}}>Delete</button>
    </div>
  );
}
