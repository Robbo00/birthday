import React from "react";
// import Countdown from './Countdown'
import data from "../data";
import Control from "./Control";

const Card = () => {
  const inf = data;
  console.log(data);

  const Expand = (key) =>{
    console.log(data)
    const [id, first_name, birthday, url] = data[key]
    console.log(id)
    console.log(first_name)
    console.log(birthday)
    console.log(url)

    return (
      <div className="blownUp">
        <div>
          <div className="profile">
            {/* <img className="pfp expanded" src= alt="" /> */}

          </div>
          <div className="sideBar">

          </div>
        </div>
        
      </div>
    )
  }

  return (
    <>
      <div className="content">
        <Control />
        <div className="cards">
          {inf.map((person) => {
            return (
              <div onClick={Expand(person.id)} key={person.id}>
                <img className="pfp condensed" src={person.url} alt="" />
                <p>{person.first_name}</p>
                {/* {Countdown(person.birthday)} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// const Countdown (birthday) => {
//     const now = new Date()
//     const count = new Date(birthday)

//     const time =
// }

export default Card;
