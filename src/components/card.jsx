import React from 'react'
import Countdown from './Countdown'

const Card = (info) => {
  return (
    info.map((person) => {
        return (
            <div className='card' key={person.id}>
                <img src='{people.url}' alt='does not exist'/>
                <h2>{person.first_name}</h2>
                {Countdown(person.birthday)}
            </div>
        )
    })
  )
}

// const Countdown (birthday) => {
//     const now = new Date()
//     const count = new Date(birthday)

//     const time = 
// }

export default Card
