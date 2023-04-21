import { Route, Routes } from "react-router-dom";
import "./App.css";
import banner from "./assets/banner.jpg";
import NavigationBar from "./components/NavigationBar";
import PlayComponent from "./components/PlayComponent";
import TermsAndConditionsComponent from "./components/TermsAndConditionsComponent";
import CashGamesComponent from "./components/CashGamesComponent";
import SpringSeriesComponent from "./components/SpringSeriesComponent";
import OtherDealsComponent from "./components/OtherDealsComponent";

function App() {
  return (
    <div className="App">
      <img className="banner" src={banner} alt="banner" />
      <div className="main-content-container">
        <div>
          <h2>მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</h2>
          <p style={{ fontSize: 20 }}>მოხვდი პოკერის ფესტივალზე მალტაში</p>
        </div>
        <div>
          <NavigationBar />
          <div className="routed-component-container">
            <Routes>
              <Route path="/CashGames" element={<CashGamesComponent />} />
              <Route path="/SpringSeries" element={<SpringSeriesComponent />} />
              <Route path="*" element={<CashGamesComponent />} />
            </Routes>
          </div>
        </div>
        <TermsAndConditionsComponent />
        <OtherDealsComponent />
      </div>
      <PlayComponent />
    </div>
  );
}

export default App;
