import React from "react";
import data from "../data";
import { closestTo, format, isPast } from "date-fns";

const Banner = ({ info }) => {
  const now = new Date();
  const forwards = data.filter((d) => {
    const compare = new Date(d.birthday);
    if (isPast(compare)) {
      return;
    }
    return d;
  });

  const dates = forwards.filter((p) => {
    return p.birthday;
  });

  const closest = closestTo(now, dates);
  console.log(closest);
  console.log(dates);

  return (
    <div className="banner">
      <img src={closest.url} alt="" />
      <h1>{closest.first_name}</h1>
    </div>
  );
};
export default Banner;
