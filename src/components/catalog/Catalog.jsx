import './Catalog.css'
import Section_france from '../sections/section_france'
import Section_germany from '../sections/section_germany'
import Section_england from '../sections/section_england'
import { useState } from 'react'
import Promo from '../promo/Promo'

export default function Catalog () {

  const [tab, setTab] = useState('france')

  function clickBtn(p) {
    setTab(p)
  }


  return (
    <>
      <div className="main_container">
        <div className="catalog_btns" id='catalog'>
          <h1>Репродукции</h1>
          <div className="catalog_btn">
            <button className={tab === 'france' ? 'active' : ''} isActive={tab === 'france'} onClick={() => clickBtn('france')} >Франция</button>
            <button className={tab === 'germany' ? 'active' : ''} isActive={tab === 'germany'} onClick={() => clickBtn('germany')} >Германия</button>
            <button className={tab === 'england' ? 'active' : ''} isActive={tab === 'england'} onClick={() => clickBtn('england')} >Англия</button>
          </div>
        </div>
          <div className="main_catalog">
          { tab === 'france' && <Section_france />}
          { tab === 'germany' && <Section_germany />}
          { tab === 'england' && <Section_england />}
         </div> 
      </div>
      {<Promo functionClick={clickBtn} tab={tab} />}
    </>
  )
}