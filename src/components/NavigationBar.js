import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        setWindowSize("small");
      } else {
        setWindowSize("large");
      }
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [windowSize]);

  const handleClick = (e) => {
    const items = document.querySelectorAll(".nav-item");
    items.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="nav-container">
      <Link
        to={"/CashGames"}
        className={`nav-item ${pathname === "/CashGames" && "active"}`}
        onClick={handleClick}
      >
        <small>
          {windowSize === "large" ? "1 - 29 აპრილი" : "28 ოქტ. - 7 ნოემ."}
        </small>
        <h3>Cash Games</h3>
      </Link>
      <Link
        to={"/SpringSeries"}
        className={`nav-item ${pathname === "/SpringSeries" && "active"}`}
        onClick={handleClick}
      >
        <small>
          {windowSize === "large" ? "13 - 29 აპრილი" : "10 - 29 დეკ."}
        </small>
        <h3>{windowSize === "large" ? "Spring Series" : "New Year Series"}</h3>
      </Link>
      <Link
        to={"/FinalStage"}
        className={`nav-item ${pathname === "/FinalStage" && "active"}`}
        onClick={handleClick}
      >
        <small>
          {windowSize === "large" ? "30 აპრილი" : "28 ოქტ. - 7 ნოემ."}
        </small>
        <h3>Final Stage</h3>
      </Link>
    </div>
  );
};

export default NavigationBar;
