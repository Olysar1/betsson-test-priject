import { useEffect, useState } from "react";

const PlayComponent = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topReached = window.scrollY < window.innerHeight * 0.5;
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (bottomReached) setIsBottom(true);
      else if (topReached) setIsBottom(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBottom]);

  return (
    <>
      <div className={`sticky-play ${isBottom ? "fixed" : ""}`}>
        <button className="big-orange-button">ითამაშე</button>
      </div>
    </>
  );
};

export default PlayComponent;
