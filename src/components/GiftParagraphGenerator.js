const GiftParagraphGenerator = ({ paragraphArr }) => {
  return (
    <>
      {paragraphArr.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </>
  );
};

export default GiftParagraphGenerator;
