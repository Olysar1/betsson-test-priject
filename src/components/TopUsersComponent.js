import { testArr } from "../testVars/testUsersArr";
import giftCard from "../assets/gift-card.png";
import { v4 } from "uuid";

const TopUsersComponent = () => {
  return (
    <div className="round-edged-component-wrapper">
      <div className="header-span-container">
        <span>ადგილი</span>
        <span>{<img src={giftCard} alt="icon" />} ვაუჩერი</span>
        <span>პრიზი</span>
      </div>
      <div className="top-players-list">
        {testArr.map((user, index) => {
          return (
            <div key={v4()} className="top-player-bar">
              <div className="player-number">{index + 1}</div>
              <div>{user.voucher}</div>
              <div className="prize">
                {user.prize.icon && <img src={user.prize.icon} alt="icon" />}
                <div>{user.prize.prizeText}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopUsersComponent;
