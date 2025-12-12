import React from "react";
import data from "../data";
import { closestTo, format, isPast } from "date-fns";

const Banner = ({ info }) => {
  const now = new Date();
  

  const dates = data.filter((p) => {
    return new Date(p.birthday);
  });

  const closest = closestTo(now, dates);

  console.log(closest)

  return (
    <div className="banner">
      <img src={closest.url} alt="" />
      <h1>{closest.first_name}</h1>
    </div>
  );
};
export default Banner;
