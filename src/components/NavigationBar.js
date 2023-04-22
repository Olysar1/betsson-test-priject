import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const { pathname } = useLocation();

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
        <small>1 - 29 აპრილი</small>
        <h3>Cash Games</h3>
      </Link>
      <Link
        to={"/SpringSeries"}
        className={`nav-item ${pathname === "/SpringSeries" && "active"}`}
        onClick={handleClick}
      >
        <small>13 - 29 აპრილი</small>
        <h3>Spring Series</h3>
      </Link>
      <div className="nav-item" onClick={handleClick}>
        <small>30 აპრილი</small>
        <h3>Final Stage</h3>
      </div>
    </div>
  );
};

export default NavigationBar;
