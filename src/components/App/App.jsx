import { useState } from "react";
import "./App.css";
// import ClickTracker from "../ClickTracker/ClickTracker";

//! Изоляция состояния
// const ClickTracker = ({ children }) => {
//   const [clicks, setClicks] = useState(0);
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };
//   return (
//     <button onClick={handleClick}>
//       {children} : {clicks}
//     </button>
//   );
// };

// export const App = () => {
//   return (
//     <div>
//       <ClickTracker>Clicks 1 </ClickTracker>
//       <ClickTracker>Clicks 2</ClickTracker>
//     </div>
//   );
// };
//!============================

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   return (
//     <div>
//       <ClickTracker value={clicks} onTrack={handleClick}>
//         Clicks 1{" "}
//       </ClickTracker>
//       <ClickTracker value={clicks} onTrack={handleClick}>
//         Clicks 2
//       </ClickTracker>
//     </div>
//   );
// };

//!============================

// export const App = () => {
//   const [clicks, setClicks] = useState({
//     a: 0,
//     b: 0,
//   });
//   const { a, b } = clicks;

//   const handleClick = (key) => setClicks({ ...clicks, [key]: clicks[key] + 1 });

//   return (
//     <div>
//       <ClickTracker value={a} onTrack={() => handleClick("a")}>
//         Clicks A
//       </ClickTracker>
//       <ClickTracker value={b} onTrack={() => handleClick("b")}>
//         Clicks B
//       </ClickTracker>
//       <p>Total clicks: {a + b}</p>
//     </div>
//   );
// };

//!============================
import articles from "../../articles.json";
import Controls from "../Controls/Controls";
import Progress from "../Progress/Progress";
import ArticleView from "../ArticleView/ArticleView";

export const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const currentArticle = selectedIdx + 1;
  const totalArticles = articles.length;

  return (
    <div className="container">
      <Controls
        onPrev={handlePrev}
        onNext={handleNext}
        first={isFirst}
        last={isLast}
      />
      <Progress current={currentArticle} total={totalArticles} />
      <ArticleView article={visibleArticle} />
    </div>
  );
};
