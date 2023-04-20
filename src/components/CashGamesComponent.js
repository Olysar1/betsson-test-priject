import infoIcon from "../assets/example-icon.png";
import GiftsComponent from "./GiftsComponent";
import TopUsersComponent from "./TopUsersComponent";

const CashGamesComponent = () => {
  return (
    <>
      <div className="container-header">
        <span>1 ₾ ᲠᲔᲘᲙᲘ = 1 ᲥᲣᲚᲐᲡ</span>
      </div>
      <div className="routed-container-body">
        <h2>
          ჰოლდემის TOP20 ლიდერბორდი
          <img src={infoIcon} alt="icon" />
        </h2>
        <TopUsersComponent />
        <GiftsComponent />
      </div>
    </>
  );
};

export default CashGamesComponent;
