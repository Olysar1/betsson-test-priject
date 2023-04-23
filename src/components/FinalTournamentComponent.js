import { finalGiftsLeft, finalGiftsRight } from "../testVars/finalGiftsArr";
import FinalGiftsComponent from "./FinalGiftsComponent";

const FinalTournamentComponent = () => {
  return (
    <>
      <div className="container-header">
        <span>ᲛᲝᲘᲒᲔ ᲡᲐᲒᲖᲣᲠᲘ 30 ᲐᲞᲠᲘᲚᲘᲡ ᲤᲘᲜᲐᲚᲣᲠ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ</span>
      </div>
      <div className="routed-container-body">
        <div className="final-gifts-container-wrapper">
          <FinalGiftsComponent items={finalGiftsLeft} />
          <FinalGiftsComponent items={finalGiftsRight} />
        </div>
        <div className="tips">
          <span>
            * თუ მოთამაშე მოიგებს ბეჭედს ორჯერ ან მეტჯერ, ის The Lord of the
            Rings ტურნირზემოხვდება ბეჭდების შესაბამისი რაოდენობის სტეკით
          </span>
          <span>
            *ტურნირში მონაწილეობის მიღება შეუძლია ნებისმიერ მსურველს 165₾-იანი
            ბაი-ინის გადახდით.
          </span>
        </div>
      </div>
    </>
  );
};

export default FinalTournamentComponent;
