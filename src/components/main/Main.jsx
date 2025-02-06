import bird from './../../img/bird.png'
import './Main.css'
export default function Main () {
  return (
    <div className="main_container main_section">
      <img src = {bird} />
      <section>
        <h1>Реплики картин <br /> от Ink House</h1>
        <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <button>Продукция</button>
      </section>
    </div>
  )
}