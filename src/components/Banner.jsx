import React from "react";
import data from "../data";
import { closestTo,  getDate,  } from "date-fns";
import { getMonth } from "date-fns/fp";

const Banner = () => {
  const now = new Date();
  

  const dates = data.map((p) => {
    const birth = new Date(p.birthday)
    const birthMonth = getMonth(birth) 
    const birthDay = getDate(birth)
    return new Date(2025 ,birthMonth , birthDay )
  });

  let closest = closestTo(now, dates);
  closest = data.findIndex((p) => {
    const birth = new Date(p.birthday)
    const birthMonth = getMonth(birth) 
    const birthDay = getDate(birth)

    return closest.getTime() === new Date(now.getFullYear(), birthMonth , birthDay).getTime()})

    closest = data[closest]
    console.log(closest)
  

  return (
    <div className="banner">
      <img className="bannerImg" src={closest.url} alt="" />
      <div className="banner-content">
        <h1 className="bannerName">🎂 {closest.first_name}</h1>
              <p>{closest.birthday}</p>
      </div>
              

    </div>
  );
};
export default Banner;
