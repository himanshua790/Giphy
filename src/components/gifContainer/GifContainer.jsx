import React from "react";
import "./gifContainer.scss";
import Gifs from "../Api"

// const api = Api();
// console.log(api)

// console.log(api)
export default function GifContainer() {

  return (
    <div className="container">
      <div className="gifHolder"><Gifs/></div>
    </div>
  );
}
