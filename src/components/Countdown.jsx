import React from 'react'

const Countdown = (birthday) => {
    const now = new Date()
    const count = new Date(birthday)
    let time = count - now
    return (
        <div>{time}</div>
    )
//Need to make countdown work
}

export default Countdown
