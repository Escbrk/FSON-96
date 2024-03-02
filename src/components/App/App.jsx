import {
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import { Player } from "../Player/Player";
import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";
import { UseMemoExample } from "../UseMemoExample/UseMemoExample";
import RefExample from "../RefExample/RefExample";
import Timer from "../Timer/Timer";
import LangSwitcher from "../LangSwitcher/LangSwitcher";

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

// export default function App() {
//   const [value, setValue] = useState(0);
//   const btnRef = useRef();

//   console.log("App: ", btnRef.current);

//   useEffect(() => {
//     console.log("App: ", btnRef.current);
//   });

//   const handleClick = () => {
//     console.log("handleClick", btnRef.current);
//   };

//   return (
//     <>
//       <button onClick={() => setValue(value + 1)}>
//         Update value to trigger re-render ({value})
//       </button>
//       <button ref={btnRef} onClick={handleClick}>
//         Button with ref
//       </button>
//     </>
//   );
// }

//!=======================================

// export default function App() {
//   const valueRef = useRef(0);

//   useEffect(() => {
//     console.log(valueRef.current);
//   });

//   const handleClick = () => {
//     valueRef.current += 1;
//   };

//   return <button onClick={handleClick}>Click to update ref value</button>;
// }

//!=======================================
//* <Player/>
// export default function App() {
//   return <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />;
// }

//!=======================================

// const CustomButton = forwardRef((props, ref) => (
//   <button ref={ref}>{props.children}</button>
// ));

// export default function App() {
//   const btnRef = useRef();

//   useEffect(() => btnRef.current.focus(), []);

//   return <CustomButton ref={btnRef}>Button with forwarded ref</CustomButton>;
// }

//!=======================================
//* Hook useToggle

// import { useToggle } from "../../hooks/useToogle";

// const ComponentA = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// const ComponentB = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open sidebar</button>
//       <Sidebar isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// /*
//  *    Розширимо хук useToggle так, щоб можна було зробити модальне вікно
//  *          спочатку відкритим. За замовчуванням робимо його закритим.
//  *                        ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
//  */

// const MyComponent = () => {
//   const { isOpen, open, close } = useToggle(true);

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

//!=======================================
// import { UserMenu } from "../UserMenu/UserMenu";

// export default function App() {
//   return (
//     <div>
//       <UserMenu/>
//     </div>
//   );
// }

//!=======================================
// import { fetchArticles } from "../../articles-api";

// export default function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     async function getArticles() {
//       const data = await fetchArticles();
//       setArticles(data);
//     }

//     getArticles();
//   }, []);
//   return (
//     <div>
//       <SearchForm />
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }

//!=======================================
// import { fetchArticles } from "../../articles-api";
// import { MagnifyingGlass } from "react-loader-spinner";
// import LoadMore from "../LoadMore/LoadMore";
// import toast from "react-hot-toast";

// export default function App() {
//   const [articles, setArticles] = useState([]);
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     if (query === "") return;

//     const getData = async () => {
//       try {
//         setIsError(false);
//         setIsLoading(true);
//         const data = await fetchArticles(query, page);
//         setArticles((prevArticles) => {
//           return [...prevArticles, ...data];
//         });
//       } catch (error) {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getData();
//   }, [query, page]);

//   const handleSearch = (query) => {
//     setArticles([]);
//     setQuery(query.toLowerCase());
//     setPage(1);
//   };

//   const handleLoadMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <div>
//       <SearchForm onSearch={handleSearch} data={articles} />
//       {isError && <b>Oops! Error! Reload!</b>}
//       {articles.length > 0 && (
//         <>
//           <ArticleList items={articles} />
//           {!isLoading && <LoadMore page={page} setPage={handleLoadMore} />}
//         </>
//       )}
//       {isLoading && <MagnifyingGlass />}
//     </div>
//   );
// }

//!=======================================

// export default function App() {
//   const [clicks, setClicks] = useState(0);
//   const date = useRef(new Date());

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>{clicks}</button>
//       <p>{date.current.getTime()}</p>
//       {/* <UseMemoExample /> */}
//       {/* <RefExample /> */}
//     </div>
//   );
// }

//!=======================================
// const CustomInput = forwardRef((props, ref) => {
//   console.log(ref)
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });
// // CustomInput.displayName = CustomInput

// export default function App() {
//   // const [isVisible, setIsVisible] = useState(false);

//   const inputRef = useRef();
//   const setFocus = () => {
//     console.log(inputRef.current.focus())
//   };

//   return (
//     <div>
//       {/* <button
//         onClick={() => {
//           setIsVisible(!isVisible);
//         }}
//       >
//         {isVisible ? "Hide" : "Show"}
//       </button>
//       {isVisible && <Timer />} */}
//       <button onClick={setFocus}>Set focus</button>
//       <CustomInput ref={inputRef} />
//     </div>
//   );
// }

//!=======================================
import langContext from "../lang-context";

export default function App() {
  const ctxValue = useContext(langContext);
  console.log(ctxValue)

  return (
    <div>
      <LangSwitcher />
      <p>Current lang: { ctxValue.lang}</p>
    </div>
  );
}
