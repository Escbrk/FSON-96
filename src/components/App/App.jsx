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
const btnRef = useRef()

  return <button ref={btnRef}>Button with ref</button>
}
