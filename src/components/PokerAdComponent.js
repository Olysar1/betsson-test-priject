const PokerAdComponent = ({ type, date }) => {
  return (
    <div className={`poker-ad ${type === "Main Event" ? "main-event-ad" : ""}`}>
      <span>
        <h4>{type}</h4>
        <h1>50 000 ₾</h1>
      </span>
      <span>
        <h4>ბაი-ინი - 550 ლარი</h4>
        <h4
          className={`poker-ad-date ${
            type === "Main Event" ? "main-event-date" : ""
          }`}
        >
          {date}
        </h4>
      </span>
    </div>
  );
};

export default PokerAdComponent;
