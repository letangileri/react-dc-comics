import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppHeader from './components/AppHeader'
import AppMain from './components/appMain'
import AppFooter from './components/AppFooter'
import AppHero from './components/AppHero'

// const names = ['Letizia', 'Marco', 'Luca'];
const menu = [
  {
    id: 1,
    text: "luca",
    link: "#",
    is_active: false,
  },
  {
    id: 2,
    text: "Marco",
    link: "#",
    is_active: true,
  },
  {
    id: 3,
    text: "Letizia",
    link: "#",
    is_active: false,
  }
]
function App() {

  return (
    <>
    <AppHeader/>
    <ul>
    {menu.map((name) => (
      <a href = {name.id}>{name.text}</a>
    ))}
    </ul>
    <AppMain/>
    <AppFooter/>
    </>
  )
}

export default App
