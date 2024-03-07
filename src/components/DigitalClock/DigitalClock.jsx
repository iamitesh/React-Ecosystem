import { useState } from 'react'

import './DigitalClock.css'

function DigitalClock() {
  let currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);
  const updateTime = () => {
    let currTime = new Date().toLocaleTimeString();
    setTime(currTime)
  }
  setInterval(updateTime, 1000)
  return (
    <h2 className='digital-timer'>{time}</h2>
  )
}

export default DigitalClock;
