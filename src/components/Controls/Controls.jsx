export default function Controls({ onPrev, onNext,first, last }) {
  return (
    <div>
      <button disabled={first} onClick={onPrev} name="prev">
        Prev
      </button>
      <button disabled={last} onClick={onNext} name="next">
        Next
      </button>
    </div>
  );
}
