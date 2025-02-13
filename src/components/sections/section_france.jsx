import Post from "../post/Post"
import data from "../../data/data_france"
import { React, useState, useEffect } from "react"

export default function Section_france () {

  const [basket, setBasket] = useState([])

  const addToCart = (item) => {
    setBasket((prevBasket) => [...prevBasket, item])
    console.log('Товар добавлен в корзину:', item)
  }

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || []
    setBasket(storedBasket)
  }, [])

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket))
  }, [basket])
  
  return (
    <>
      {data.map(p => 
        <Post addToCart={addToCart} key={p.id} pictureUrl={p.picture} author={p.author} title={p.title} body={p.body} price={p.price} />
      )}
    </>
  )
}