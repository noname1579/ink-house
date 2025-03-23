import bird from '/bird.png'
import './Main.css'
import '../../mobile screen/mobile_Main.css' 

export default function Main () {

  function scroll() {
    document.getElementById('catalog').scrollIntoView()
  }

  return (
    <div className="main_container main_section">
      <img src = {bird} />
      <section>
        <h1>Реплики картин <br /> от Ink House</h1>
        <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
        <button onClick={() => scroll()}>Продукция</button>
      </section>
    </div>
  )
}