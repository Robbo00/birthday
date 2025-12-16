import React from "react";
import data from "../data";
import { closestTo,  format,  getDate,  } from "date-fns";
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
    const month = format(new Date(closest.birthday), 'MMM') 
    const day = format(new Date(closest.birthday), 'dd')

  return (
    <div className="banner">
      
      <img className="bannerImg" src={closest.url} alt="" />
      <div className="banner-content">
        <h1 className="bannerName">🎂 {closest.first_name}</h1>
              <p>Tiffie has the next birthday on {month +' ' + day}</p>
      </div>
              

    </div>
  );
};
export default Banner;
