import React from "react";
import data from "./data";
import Control from "./components/Control";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/card";
import { format, getDate, isPast } from "date-fns";
import { useState } from "react";
import { getMonth } from "date-fns/fp";

const Layout = () => {
  const inf = data;
  let active = inf.filter((d) => {
    const compare = new Date(d.birthday);
    const birth = format(compare, "MM/dd");

    if (isPast(birth)) {
      return null;
    }
    return d;
  });
  const [filter, setFilter] = useState(active);

  const laddered = (l) => {
    let curr = new Date();

    if (l === "This month") {
      const currMonth = format(curr, "MMM");
      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday);
        const personMonth = format(personBirthday, "MMM");
        if (personMonth === currMonth) {
          return p;
        }
        return null;
      });
    }

    if (l === "Today") {
      const currMonth = format(curr, "MMM");
      const currDay = format(curr, "dd");
      const exactDate = currMonth + currDay;

      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday);
        const personMonth = format(personBirthday, "MMM");
        const personDay = format(personBirthday, "dd");
        const personDate = personMonth + personDay;

        if (exactDate === personDate) {
          return p;
        }
        return null;
      });
    }

    if (l === "All") {
      active = inf;
    }

    if (l === "Upcoming") {
      const currMonth = getMonth(curr);
      const currDay = getMonth(curr);

      active = inf.filter((person) => {
        const birthday = new Date(person.birthday);
        const birthdayMonth = getMonth(birthday);
        const birthdayDay = getDate(birthday);
        if (currMonth <= birthdayMonth) {
          if (currDay <= birthdayDay) {
            return person;
          }
        }

        return null;
      });
    }

    setFilter(active);
  };

  return (
    <div className="centered">
      <div className="content">
        <Header />
        <Banner />
        <Control ladder={laddered} />
        <div className="cards">
          {filter.map((person) => {
            return <Card key={person.id} person={person} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Layout;
