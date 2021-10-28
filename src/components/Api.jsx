import React, { useEffect, useState } from "react";
import axios from "axios";

const Gifs = ({ search }) => {
  console.log("Search in API:", search);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (searchData,q="") => {
      const getdata = await axios(
        `https://api.giphy.com/v1/gifs/${searchData}`,
        {
          params: {
            q:q,
            api_key: "O3m06PY3oNNASdhYvjaZVM07fhLxXJ2u",
          },
        }
      );
      // console.log("response of getData", getdata);
      return getdata;
    };
    if (search !== "") {
      fetchData(`search`,search).then((val) => {
        console.log("resp in if:", val, search);
        setData(val.data.data);
      });
    } else {
      fetchData("trending").then((val) => {
        console.log("resp in else:", val, search);
        setData(val.data.data);
      });
    }
  }, [search]);

  useEffect(() => {
    console.log("Data Set", data);
  }, [data]);

  return data.map((e) => {
    return (
      // <div>Hey</div>
      <div key={e.id} className="gif">
        {<img src={e.images.fixed_height.url} alt="gifs" />}
      </div>
    );
  });
};

export default Gifs;
