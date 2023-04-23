import { v4 } from "uuid";
import mysticKey from "../assets/mystic-key.svg";
import { mysticKeyArr } from "../testVars/mysticKeyArr";

const MysticKeyComponent = () => {
  return (
    <>
      <div className="container-header" style={{ height: 100 }}>
        <img src={mysticKey} alt="mystic-key-img" />
      </div>
      <div className="routed-container-body">
        <h2>
          მოთამაშეები გარკვეული საპრიზო ადგილების დაკავების შემთხვევაში მიიღებენ
          საიდუმლო გასაღებს
        </h2>
        <div className="round-edged-component-wrapper mystic-key-special">
          <div className="scrollable-list-container">
            {mysticKeyArr.map((item, index) => {
              return (
                <div key={v4()} className="scrollable-entry">
                  <div className="player-number">{index + 1}</div>
                  <h3>{item}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MysticKeyComponent;
