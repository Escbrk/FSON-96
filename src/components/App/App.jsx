import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

//!=======================================

// export default function App() {
//   const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
//   const [query, setQuery] = useState("");
//   const [clicks, setClicks] = useState(0);

//   // const filteredPlanets = planets.filter((planet) => planet.includes(query));
//   const filteredPlanets = useMemo(
//     () => planets.filter((planet) => planet.includes(query)),
//     [planets, query]
//   );

//   return (
//     <>
//       <button
//         onClick={() => {
//           setClicks(clicks + 1);
//         }}
//       >
//         Number of clicks: {clicks}
//       </button>
//       <ul>
//         {filteredPlanets.map((planet) => (
//           <li key={planet}>{planet}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//!=======================================

export default function App() {
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  console.log("App: ", btnRef.current);

  useEffect(() => {
    console.log("App: ", btnRef.current);
  });

  const handleClick = () => {
    console.log("handleClick", btnRef.current);
  };

  return (
    <>
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render ({value})
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
}
