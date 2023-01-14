import React from 'react'
import Navbar from '../Navbar/Navbar'
import bg from '..//../images/bg.jpg'
import style from './style.css'
import zIndex from '@material-ui/core/styles/zIndex'

export default function Header() {
  return (
    <header style={{ padding:'50px'}}>
         <Navbar/>
    </header>
  )
}
