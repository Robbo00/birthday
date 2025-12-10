import React from "react";
import data from "./data";
import Control from "./components/Control";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Card from "./components/card";
import { format, isPast } from "date-fns";
import { useState } from "react";

const Layout = () => {
  const inf = data;
  let active = inf.filter((d) => {
    const compare = new Date(d)
    if(isPast(compare)){
      return
    }
    return d
  })
  const [filter, setFilter] = useState(active)

  const laddered = (l) => {
    const curr = new Date()
    
    if(l == 'This month'){
      const currMonth = format(curr, 'MMM')
      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday)
        const personMonth = format(personBirthday, 'MMM')

        if(personMonth == currMonth){
          return p
        }
      })
    }

    if(l == 'Today'){
      const currMonth = format(curr, 'MMM')
      const currDay = format(curr, 'dd')
      const exactDate = currMonth + currDay

      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday)
        const personMonth = format(personBirthday, 'MMM')
        const personDay = format(personBirthday, 'dd')
        const personDate = personMonth + personDay

        if(exactDate == personDate){
          return p
        }
      })
    }

    if(l == 'This month'){
      const currMonth = format(curr, 'MMM')
      active = inf.filter((p) => {
        const personBirthday = new Date(p.birthday)
        const personMonth = format(personBirthday, 'MMM')

        if(personMonth == currMonth){
          return p
        }
      })
    }

    if(l == 'Upcoming'){
      active = inf.filter((d) => {
        const compare = new Date(d)
        if(isPast(compare)){
          return
        }
        return d
      })
    }

    setFilter(active)
  }

  return (
    <div className="centered">
      <div className="content">
        <Header />
        <Banner />
        <Control ladder={laddered}/>
        <div className="cards">
          {filter.map((person) => {
            return <Card key={person.id} person={person}/>
          })}
        </div>
      </div>
    </div>
  );
};

// const Countdown (birthday) => {
//     const now = new Date()
//     const count = new Date(birthday)

//     const time =
// }

export default Layout;

//  const Expand = (key) =>{
//     console.log(data)
//     const {id, first_name, birthday, url} = data[key]
//     console.log(id)
//     console.log(first_name)
//     console.log(birthday)
//     console.log(url)

//     return (
//       <div className="blownUp">
//         Control()
//         <div>
//           <div className="profile">
//             {/* <img className="pfp expanded" src= alt="" /> */}

//           </div>
//           <div className="sideBar">

//           </div>
//         </div>

//       </div>
//     )
//   }
