import React from "react";
import data from "../data";
import { closestTo,  getDate,  } from "date-fns";
import { getMonth } from "date-fns/fp";

const Banner = ({ info }) => {
  const now = new Date();
  

  const dates = data.map((p) => {
    const birth = new Date(p.birthday)
    const birthMonth = getMonth(birth) + 1
    const birthDay = getDate(birth)
    return new Date(2025 ,birthMonth, birthDay )
  });

  const closest = closestTo(now, dates);


  return (
    <div className="banner">
      <img src={closest.url} alt="" />
      <h1>{closest.first_name}</h1>
    </div>
  );
};
export default Banner;
