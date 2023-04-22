import BeTopTwentyComponent from "./BeTopTwentyComponent";
import ScheduleComponent from "./ScheduleComponent";
import SideLeaderBoardComponent from "./SideLeaderBoardComponent";
import TournamentsComponent from "./TournamentsComponent";

const SpringSeriesComponent = () => {
  return (
    <>
      <div className="container-header">
        <span>ᲢᲣᲠᲜᲘᲠᲔᲑᲘ ᲓᲐ ᲡᲐᲢᲔᲚᲘᲢᲔᲑᲘ</span>
      </div>
      <TournamentsComponent />
      <div className="container-header">
        <span>ᲛᲝᲮᲕᲓᲘ TOP20 ᲚᲘᲓᲔᲠᲑᲝᲠᲓᲨᲘ ᲢᲣᲠᲜᲘᲠᲔᲑᲖᲔ ᲓᲐᲒᲠᲝᲕᲔᲑᲣᲚᲘ ᲥᲣᲚᲔᲑᲘᲗ</span>
      </div>
      <BeTopTwentyComponent />
      <ScheduleComponent />
      <SideLeaderBoardComponent />
    </>
  );
};

export default SpringSeriesComponent;
