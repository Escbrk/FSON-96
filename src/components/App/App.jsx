import "./App.css";
import { useEffect, useState } from "react";

export const App = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <div>
  //     <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "Open"}</button>
  //     {isOpen && <Modal />}
  //   </div>
  // );
  //!__________________________________________
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   console.log("CLicks updated: ", clicks);
  // }, [clicks]);
  // return (
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     You clicked {clicks} times
  //   </button>
  // );
  //!__________________________________________
  // const [clicks, setClicks] = useState(0);
  // useEffect(() => {
  //   console.log("You can see me only once");
  // }, []);
  // useEffect(() => {
  //   console.log("Clicks updated: ", clicks);
  // }, [clicks]);
  // useEffect(() => {
  //   document.title = `You clicked ${clicks} times`;
  // });
  // return (
  //   <button onClick={() => setClicks(clicks + 1)}>
  //     You clicked {clicks} times
  //   </button>
  // );
  // const [clicks, setClicks] = useState(0);
  //!__________________________________________
  // const [first, setFirst] = useState(0);
  // const [second, setSecond] = useState(0);
  // useEffect(() => {
  //   console.log("First updated: ", first);
  // }, [first]);
  // useEffect(() => {
  //   console.log("Second updated: ", second);
  // }, [second]);
  // useEffect(() => {
  //   console.log("First or second updated: ", first + second);
  // }, [first, second]);
  // return (
  //   <>
  //     <button onClick={() => setFirst(first + 1)}>First: {first}</button>
  //     <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
  //   </>
  // );
  //!__________________________________________
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);
  
  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
  //!__________________________________________
  //* Пример с объектом
  // const [obj, setObj] = useState(() => {
  //   const savedObject = localStorage.getItem('key')
  // })

  // if (savedObject !== null) {
  //   return JSON.parse(savedObject)
  // }

  // return {}
};
