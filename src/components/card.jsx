import React from 'react'

const Card = (info) => {
  return (
    info.map((person) => {
        return (
            <div className='card' key={person.id}>
                <img src='{people.url}' alt='does not exist'/>
                <h2>{person.first_name}</h2>
                <Countdown />
            </div>
        )
    })
  )
}

const Countdown (birthday) => {
    let count = new Date(birthday)

}

export default Card
