import React, { useState } from 'react'
import { format } from "date-fns";


const Card = ({person}) => {
    const [hover, setHover] = useState('false')

    const birthday = new Date(person.birthday);

        const month = format(birthday, "MMM");

        const day = format(birthday, "d");       
        

  return (
    

        
          <div onMouseEnter={() => setHover('hover')} onMouseLeave={() => setHover('')} key={person.id}>
            <img
              className={`pfp ${hover}`}
              src="https://cdna.artstation.com/p/assets/images/images/084/124/296/large/matthew-blank-profile-photo-1.jpg?1737590038"
              alt=""
            />
            <div className="text">
              <h3 className={hover}>{person.first_name}</h3>
              <div className="subInfo">
                <p className="date">{month + " " + day}</p>
                <p className="age">Turning 12</p>
              </div>
            </div>

            {/* {Countdown(person.birthday)} */}
          </div>

      )
}

export default Card