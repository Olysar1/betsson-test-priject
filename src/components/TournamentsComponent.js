const TournamentsComponent = () => {
  return (
    <div className="routed-container-body spring-series">
      <h2>სერიის ფარგლებში, ყოველდღიურად გაიმართება 3 ივენთი:</h2>
      <span className="timing">19:00 / 19:30 / 20:00</span>
      <div style={{ width: 450 }}>
        <p>* ყველა ტურნირზე მოხვედრა შესაძლებელია 0 ლარიდან.</p>
        <p>ტურნირების სრული განრიგის სანახავად გადადი პოკერის ლობიში</p>
      </div>
      <button className="big-orange-button">პოკერის ლობი</button>
    </div>
  );
};

export default TournamentsComponent;
