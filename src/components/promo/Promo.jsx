import './Promo.css'
import star from './../../img/Star.png'

export default function Promo () {
  return(
    <section className='promo'>
      <div className="main_container container">
        <div className="promo_title">
          <img src={star} />
          <h1>Новая коллекция <br /> французских авторов</h1>
        </div>
        <div className="promo_p">
          <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p> 
          <br />
          <p>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
          <button>Ознакомиться</button>
        </div>
      </div>
    </section>
  )
}