import planeIcon from "../assets/travel-icon-sm.png";
import ticketIcon from "../assets/ticket-icon-sm.png";
import giftIcon from "../assets/gift-card.png";

const GiftsComponent = () => {
  return (
    <div
      className="round-edged-component-wrapper"
      style={{ height: "auto", paddingTop: 32 }}
    >
      <span className="gifts">
        <img src={planeIcon} alt="plane-icon" />
        <h2>The Festival in Malta-ს საგზური</h2>
      </span>
      <span className="gifts">
        <img src={ticketIcon} alt="plane-icon" />
        <h2>
          სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The
          Festival in Malta-ს საგზური
        </h2>
      </span>
      <span className="gifts">
        <img src={giftIcon} alt="plane-icon" />
        <h2>ტექნიკის მაღაზიის ვაუჩერი</h2>
      </span>
    </div>
  );
};

export default GiftsComponent;
