import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PlayComponent = () => {
  const [isBottom, setIsBottom] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const topReached = window.scrollY < window.innerHeight * 0.5;
      const bottomReached =
        document.documentElement.clientHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      if (bottomReached) setIsBottom(true);
      else if (topReached) setIsBottom(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBottom]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`sticky-play ${isBottom ? "fixed" : ""}`}
        style={{
          marginTop: `${
            windowWidth <= 768 &&
            location.pathname === "/SpringSeries" &&
            "35px"
          }`,
        }}
      >
        <button className="big-orange-button">ითამაშე</button>
      </div>
    </>
  );
};

export default PlayComponent;
