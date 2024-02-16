import { useEffect, useState } from "react";

export default function Timer() {
  const [date, setDate] = useState(Date.now());
  useEffect(() => {
    console.log(date);
  }, [date]);

  return <div>Timer</div>;
}
