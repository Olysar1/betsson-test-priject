const PassFeatureComponent = ({ itemList }) => {
  return (
    <div className="routed-container-body pass-feature-container">
      {itemList.map((item, index) => {
        //ინდექსების key-ებად გამოყენება არ არის რეკომენდირებული, მაგრამ ამ შემთხვევაში
        //შედერებით უსაფრთხოა რადგან ზუსტად ვიცით მოცემული ელემენტების რაოდენობა არ შეიცვლება
        //მეტი უსაფრთხოებისთვის შეგვეძლო გამოგვეყენებინა uuid.
        return (
          <div className="pass-feature" key={index}>
            <img src={item.icon} alt="icon" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default PassFeatureComponent;
