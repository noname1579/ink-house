import { React, useState, useEffect } from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import './Header.css'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  const [basket, setBasket] = useState([])

  function OpenBasket() {
    setIsOpen(!isOpen)
  } 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('basket'))
    setBasket(storedCart)
  }, [isOpen])

  return (
    <main>
      <div className="container">
        <div className="main_logo">
          <img src = {logo} />
          <h1>Ink House</h1>
        </div>
        <div className="main_nav">
          <a href="#catalog">Репродукции</a>
          <a href="#promo">Новинки</a>
          <a href="#about">О нас</a>
          <button onClick={() => OpenBasket()} ><img src={cart} /></button>
        </div>
        <div className={`main_basket ${isOpen && 'active'}`}>
          <div className="main_basket_name">
            <h1>Корзина</h1>
          </div>
          <div className="main_basket_shops">
            {basket.map((item, index) => (
              <div className="main_basket_shops_shop" key={index}>
                <h1>{item.title}</h1>
                <h2>{item.price}₽</h2>
              </div>
            ))}
          </div>
          <div className="main_basket_buyBtn">
            <button onClick={() => console.log('Процесс покупки...')}>Купить</button>
          </div>
        </div>
      </div>
    </main>
  )
}
