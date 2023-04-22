import GiftsComponent from "./GiftsComponent";
import TopUsersComponent from "./TopUsersComponent";

const BeTopTwentyComponent = () => {
  return (
    <div className="routed-container-body">
      <TopUsersComponent />
      <GiftsComponent />
      <p>
        *ლიდერბორდის შედეგები განახლდება <a href="/">პოკერის ლობიში</a>
      </p>
      <p style={{ paddingBottom: 15 }}>
        * სატურნირო ლიდერბორდის ქულების დათვლაში არ მონაწილეობს ფრიროლები და
        სატელიტები
      </p>
    </div>
  );
};

export default BeTopTwentyComponent;
