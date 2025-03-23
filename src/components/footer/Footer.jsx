import './Footer.css'
import logo from '/logo.svg'
import '../../mobile screen/mobile_Footer.css' 

export function Footer () {
  return (
      <div className='footer_container'>
        <div className="footer_logo">
          <img src= {logo} />
          <h1>Ink House</h1>
          <p>+7 (999) 543-54-54</p>
          <a href='#catalog' className='footer_btn' >Репродукции</a>
          <a href='#promo' className='footer_btn' >Новинки</a>
          <a href='#about' className='footer_btn' >О нас</a>
        </div>
      </div>
  )
}