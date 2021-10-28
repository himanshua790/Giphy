import React, { useEffect } from "react";
import "./gifContainer.scss";
import Gifs from "../Api";

export default function GifContainer({ search }) {
  useEffect(() => {
    console.log("updetd:L", search);
    //use api here
  }, [search]);
  return (
    <div className="container">
      <div> Hello {search}</div>
      <div className="gifHolder">
        <Gifs search={search} />
      </div>
    </div>
  );
}
