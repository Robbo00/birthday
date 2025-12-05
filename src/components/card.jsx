import React from "react";
import data from "../data";
import { format } from "date-fns";
import Control from "./Control";
import Header from "./Header";
import Banner from "./Banner";
import { useState } from "react";
const Card = () => {
  const inf = data;
  console.log(data);
  const [name, setName] = useState("");

  return (
    <div className="centered">
      <div className="content">
        <Header />
        <Banner />
        <Control />
        <div className="cards">
          {inf.map((person) => {
            const birthday = new Date(person.birthday);

            const month = format(birthday, "MMM");

            const day = format(birthday, "d");
            return (
              <div onMouseOut={() => {setName('')}} onMouseOver={() => {setName('nameHover')}} key={person.id}>
                <img
                  className="pfp condensed"
                  src="https://cdna.artstation.com/p/assets/images/images/084/124/296/large/matthew-blank-profile-photo-1.jpg?1737590038"
                  alt=""
                />
                <div className="text">
                  <h3 className={'name ' + name}>{person.first_name}</h3>
                  <div className="subInfo">
                    <p className="date">{month + " " + day}</p>
                    <p className="age">Turning 12</p>
                  </div>
                </div>

                {/* {Countdown(person.birthday)} */}
              </div>
            );
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

export default Card;

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
