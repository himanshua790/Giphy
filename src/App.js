import React from 'react';
import './App.css';
import Heading from "./components/heading/Heading"
import Body from "./components/body/Body"
import GifContainer from "./components/gifContainer/GifContainer"


function App() {

  // setInterval(
  //   function () {
  //     var randomColor = Math.floor(Math.random()*16777215).toString(16);
  //     var myApp  = document.getElementById("myApp");
  //     myApp.style.backgroundColor = "#"+randomColor;
  //   },1000);

  return (
    <div id="myApp" className="App">
    <div id="mainWrapper">
    <Heading />
    <Body />
    </div>
    <GifContainer />
    </div>
  );
}

export default App;
