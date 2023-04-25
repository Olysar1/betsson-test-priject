import clock from "../assets/clock.svg";

const TournamentsComponent = () => {
  return (
    <div className="routed-container-body spring-series">
      <h2>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h2>
      <div className="timing-container">
        <img src={clock} alt="clock-icon" />
        <span className="timing">19:00 / 19:30 / 20:00</span>
      </div>
      <div>
        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
        <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
      </div>
      <button className="big-orange-button">პოკერის ლობი</button>
    </div>
  );
};

export default TournamentsComponent;
