import "./App.css";
import Header from "./component/header";
import BottomBar from "./component/bottomBar";
import NavigationBar from "./component/navigationBar";
import ShoppingCard from "./component/shoppingCard";
import SliderBar from "./component/sliderBar";
import Title from "./component/title";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { getCardData } from './feautures/productsReducer.js';



function App() {
  return (
    <div>
  
      <Header />
      <NavigationBar />
      <SliderBar />
      <Title />
      <ShoppingCard />
      <BottomBar />
    </div>
  );
}

export default App;
