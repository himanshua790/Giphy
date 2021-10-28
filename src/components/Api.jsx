// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Api() {
//   const [data, setData] = useState([]);

//   //Fetching data
//   useEffect(() => {
//     const fetchData = async () => {
//       const getdata = await axios("https://api.giphy.com/v1/gifs/trending", {
//         params: {
//           api_key: "O3m06PY3oNNASdhYvjaZVM07fhLxXJ2u",
//         },
//       });
//       console.log(getdata.data.data);
//       setData(getdata.data.data);
//     };
//     fetchData();
//   }, []);

//   const gifs = () => {
//     return data.map((e) => {
//       return (
//         <div key={e.id} className="gif">
//           <img src={e.images.fixed_height.url} alt="gifs" />
//         </div>
//       );
//     });
//   };

// }

import React, { useEffect, useState } from "react";
import axios from "axios";

const Gifs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const getdata = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "O3m06PY3oNNASdhYvjaZVM07fhLxXJ2u",
        },
      });
      console.log(getdata.data.data);
      setData(getdata.data.data);
    };
    fetchData();
  }, []);

  return data.map((e) => {
    return (
      <div key={e.id} className="gif">
        <img src={e.images.fixed_height.url} alt="gifs" />
      </div>
    );
  });
};

export default Gifs;
