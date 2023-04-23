import { StyledFinalGifts } from "./FinalGifts.style";
import GiftParagraphGenerator from "./GiftParagraphGenerator";

const FinalGiftsComponent = ({ items }) => {
  return (
    <div className="final-gifts-container">
      {items.map((item, index) => {
        return (
          <StyledFinalGifts background={`${item.background}`} key={index}>
            <h2>{item.headline}</h2>
            <GiftParagraphGenerator paragraphArr={item.paragraphs} />
          </StyledFinalGifts>
        );
      })}
    </div>
  );
};

export default FinalGiftsComponent;
