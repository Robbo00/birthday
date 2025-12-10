import React from "react";
import data from "./data";
import Control from "./components/Control";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/card";
import { format, isPast } from "date-fns";
import { useState } from "react";

const Layout = () => {
  const t = '12/05'
  const x = '12/04'
  console.log(isPast(t, 'MM/dd', x)) 

  const inf = data;
  let active = inf.filter((d) => {
    const compare = new Date(d.birthday);
            const birth = format(compare, 'MM/dd')

    if (isPast(birth)) {
      return;
    }
    return d;
  });
  const [filter, setFilter] = useState(active);

  const laddered = (l) => {
    const curr = new Date();

    if (l === "This month") {
      const currMonth = format(curr, "MMM");
      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday);
        const personMonth = format(personBirthday, "MMM");

        if (personMonth === currMonth) {
          return p;
        }
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

        if (exactDate == personDate) {
          return p;
        }
      });
    }

    if (l === "All") {
      active = inf;
    }

    if (l === "Upcoming") {
      active = inf.filter((d) => {
        const compare = new Date(d.birthday);
        const test = format(curr, 'MM/dd')
        const birth = format(compare, 'MM/dd')
        console.log(birth)
        if (isPast(curr, birth)) {
          return;
        }
        return d;
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
