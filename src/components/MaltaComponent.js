import malta from "../assets/malta-pic.png";
import PassFeatureComponent from "./PassFeatureComponent";
import { typeOne, typeTwo } from "../testVars/passFeaturesArr";

const MaltaComponent = () => {
  return (
    <div className="routed-container-body final-stage-container-specific">
      <img className="malta-pic" src={malta} alt="malta-pic" />
      <h2>ᲒᲐᲔᲛᲒᲖᲐᲕᲠᲔ THE FESTIVAL IN MALTA-ᲖᲔ!</h2>
      <h3>
        The Festival სერიების ფარგლებში, ევროპაბეთი უკვე მეორედ აძლევს პოკერის
        მოთამაშეებს დაუვიწყარი მოგზაურობის შანსს.
      </h3>
      <div className="gifts malta-info-bar">
        <span>
          15-დან 26 მაისის ჩათვლით მალტა პოკერის ფესტივალს უმასპინძლებს
        </span>
      </div>
      <div className="pass-categories-wrapper">
        <div className="pass-categories">
          <div className="container-header">
            <span>A კატეგორიის საგზურში შედის</span>
          </div>
          <PassFeatureComponent itemList={typeOne} />
        </div>
        <div className="pass-categories">
          <div className="container-header">
            <span>A კატეგორიის საგზურში შედის</span>
          </div>
          <PassFeatureComponent itemList={typeOne} />
        </div>
        <div className="pass-categories">
          <div className="container-header">
            <span>A კატეგორიის საგზურში შედის</span>
          </div>
          <PassFeatureComponent itemList={typeTwo} />
        </div>
      </div>
    </div>
  );
};

export default MaltaComponent;
