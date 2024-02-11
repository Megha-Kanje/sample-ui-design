import axios from "axios";
import React, { useEffect, useState } from "react";

function Countris() {
  const [data, setData] = useState([]);
  const fetchContry = async () => {
    const res = await axios.get("https://restcountries.com/v2/all");
    const resData = await res.data;
    console.log(resData, "res");
    setData(resData);
  };
  useEffect(() => { // componentDidMount
    fetchContry();
  }, []);
  return (
    <div className="main_wrapper">
      {data.map((e) => {
        return (
          <div className="wrapper">
            <div>
              <img className="flags" src={e.flag} alt="flag" />
            </div>
            <div className="countryName" >{e.name}</div>
            <div className="Font_Bold" >Poputation: <span className="Font_normal Poputation" > {e.population}</span></div>
             <div className="Font_Bold" >Region: <span className="Font_normal Region" >{e.region}</span></div>
             <div className="Font_Bold" >Subregion: <span className="Font_normal Subregion" > {e.subregion}</span></div>
             <div className="Font_Bold" >Capital: <span className="Font_normal Capital" > {e.capital}</span></div>
             <div className="Font_Bold" >Area: <span className="Font_normal Area" > {e.area}</span></div>


          </div>
        );
      })}
    </div>
  );
}

export default Countris;
