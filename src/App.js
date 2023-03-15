import "./App.css";
import Header from "./component/header";
import BottomBar from "./component/bottomBar";
import NavigationBar from "./component/navigationBar";
import ProductCard from "./component/productCard";
import SliderBar from "./component/slider";
import ContentTitle from "./component/contentTitle";

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <SliderBar />
      <ContentTitle />
      <ProductCard />
      <BottomBar />
    </div>
  );
}

export default App;
