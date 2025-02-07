import { React, useState } from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import './Header.css'

export default function Header() {


  return (
    <main>
      <div className="container">
        <div className="main_logo">
          <img src = {logo} />
          <h1>Ink House</h1>
        </div>
        <div className="main_nav">
          <a href="#catalog">Репродукции</a>
          <a href="#">Новинки</a>
          <a href="#">О нас</a>
          <img src={cart} />
        </div>
      </div>
    </main>
  )
}
