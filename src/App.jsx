import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBox from './SearchBox.jsx'
import WeatherApp from './WeatherApp.jsx'

function App() {
  return (
    <>
      <h1>Weather app</h1>
      <WeatherApp />
    </>
  )
}

export default App
