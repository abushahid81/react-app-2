import React from "react";
import './App.css';
import Abu from "./Components/Header.js";
// import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';



// class App {
//   render() {
   
//   }
// }
function App () {
   return (
  <>
   {/* <Header/> */}
   <Abu/>
   <Carousel/>
   <ExampleCarouselImage/>
  </>
);
}
export default App;

