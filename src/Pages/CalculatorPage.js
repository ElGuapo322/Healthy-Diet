//import Calc from "../Components/CalculatorComponents/Calculator";
import "./CalcPage.css";
import Calc from "../Components/СalculatorComponents/Calculator";
import NavBar from "../Components/NavBar/NavBar";
import DisplayMeals from "../Components/TopBar/TopBar";
import Footer from "../Components/FooterBar/Footer";
import useWindowSize from "../helpers/GetSize";

export default function CalculatorPage() {
  const size = useWindowSize();
  return (
    <div className="main-block">
      <div className="blue-block">
        <NavBar />
        <div className="main-title">Калькулятор калорий</div>
        <Calc />
      </div>
      {size.width > 600 ? <DisplayMeals /> : <div></div>}
      <Footer />
    </div>
  );
}
