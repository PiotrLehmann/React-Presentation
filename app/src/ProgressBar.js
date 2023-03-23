import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // how much from top client is
    const winScroll = document.documentElement.scrollTop;
    // how much document height is
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // calculating it into %
    const scrolled = (winScroll / height) * 100;
    // setting scrollbar %
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="bar-filling" style={{ width: `${scrollTop}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
