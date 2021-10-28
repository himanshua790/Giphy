import React,{useState} from "react";
import "./body.scss";
import axios from "axios";
import Gifs from "../Api" 

export default function Body() {
  const [search,setSearch] = useState("")
  
  const searchData = (event) =>{
    setSearch(event.target.value)
  }

  const ShowData = async(event) =>{
    const [data, setData] = useState([]);
    console.log("dfwer")
    event.preventDefault();
    const fetchData = async () => {
      const getdata = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "O3m06PY3oNNASdhYvjaZVM07fhLxXJ2u",
        },
      });
      console.log(getdata.data.data);
      setData(getdata.data.data);
    };
    fetchData();
  }

  return (
    <div id="containerB">
      <div id="wrapperB">
        <input value={search} onChange={searchData} id="search" type="search" placeholder="Type here"></input>
        <button onClick={ShowData}>Go</button>
      </div>
    </div>
  );
}
