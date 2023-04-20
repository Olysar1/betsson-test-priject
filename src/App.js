import "./App.css";
import banner from "./assets/banner.jpg";
import PlayComponent from "./components/PlayComponent";
import TermsAndConditionsComponent from "./components/TermsAndConditionsComponent";

function App() {
  return (
    <div className="App">
      <img className="banner" src={banner} alt="banner" />
      <div className="main-content-container">
        <TermsAndConditionsComponent />
      </div>
      <PlayComponent />
    </div>
  );
}

export default App;
