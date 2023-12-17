import { useEffect, useState } from 'react'
import './clock.css'

// Components
import AnalogClock from './components/AnalogClock'
import DigitalClock from './components/DigitalClock'
import { FaMoon, FaRegSun } from 'react-icons/fa'

export default function Clocks() {
  const [date, setDate] = useState(new Date())

  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <Theme>
      <div className="clock-app">
        <AnalogClock time={time} />
        <div style={{ marginTop: '30px' }}>
          {' '}
          <DigitalClock time={time} />
        </div>
      </div>
    </Theme>
  )
}

function Theme({ children }) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const icons = theme === 'dark' ? <FaRegSun /> : <FaMoon />

  return (
    <div className={`app ${theme}`}>
      <button className="btn-toggle-theme" onClick={toggleTheme}>
        {icons}
      </button>
      {children}
    </div>
  )
}
