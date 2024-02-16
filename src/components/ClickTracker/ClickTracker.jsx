import { useEffect, useState } from "react";

const getInitialClicks = () => {
  const savedClicks = localStorage.getItem("my-clicks");
  return savedClicks !== null ? JSON.parse(savedClicks) : 0;
};

export default function ClickTracker({ value, onTrack, children }) {
  const [clicks, setClicks] = useState(getInitialClicks);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    localStorage.setItem("my-clicks", clicks);
  }, [clicks]);

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={()=>setClicks(0)}>Reset</button>
      <button onClick={() => setDate(Date.now())}>Date: {date}</button>
    </div>
  );
}
