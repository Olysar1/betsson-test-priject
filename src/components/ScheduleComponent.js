import PokerAdComponent from "./PokerAdComponent";

const ScheduleComponent = () => {
  return (
    <div
      className="routed-container-body"
      style={{ borderRadius: 21, marginTop: 30 }}
    >
      <h2>ᲧᲝᲕᲔᲚᲓᲦᲘᲣᲠᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</h2>
      <div className="poker-ad-container">
        <PokerAdComponent type={"Holdem Highrollers"} date={"27 აპრილი "} />
        <PokerAdComponent type={"Omaha Highrollers"} date={"28 აპრილი "} />
      </div>
      <PokerAdComponent type={"Main Event"} date={"29 აპრილი "} />
      <p style={{ padding: "0 300px" }}>
        * სამივე ტურნირის გამარჯვებულები მიიღებენ ბეჭდებს და ფინალურ ეტაპზე, The
        Lord of the Rings ტურნირზე, იბრძოლებენ The Festival in Malta-ს საგზურის
        მისაღებად.
      </p>
    </div>
  );
};

export default ScheduleComponent;
