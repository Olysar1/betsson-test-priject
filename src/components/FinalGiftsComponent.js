import GiftParagraphGenerator from "./GiftParagraphGenerator";

const FinalGiftsComponent = ({ items }) => {
  return (
    <div className="final-gifts-container">
      {items.map((item, index) => {
        return (
          <div
            className="final-gifts"
            key={index}
            style={{ backgroundImage: `url(${item.background})` }}
          >
            <h2>{item.headline}</h2>
            <GiftParagraphGenerator paragraphArr={item.paragraphs} />
          </div>
        );
      })}
    </div>
  );
};

export default FinalGiftsComponent;
