import { useMemo, useState } from "react";

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const value = useMemo(() => {
    console.log("Calculating value");

    return a + b;
  }, [a, b]);

//   const x = useMemo(() => {
//     console.log("x");
//     return b + c;
//   }, [b, c]);

  return (
    <div>
      <button onClick={() => setA(a + 1)}>Update a: {a}</button>
      <button onClick={() => setB(b + 1)}>Update b: {b}</button>
      <button onClick={() => setC(c + 1)}>Update c: {c}</button>
      <p>Value: {value}</p>
    </div>
  );
};
