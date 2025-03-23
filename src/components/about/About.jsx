import './About.css'
import img from '/Group 210.png'
import img1 from '/Ellipse 30.png'
import img2 from '/Ellipse 31.jpg'
import img3 from '/Ellipse 32.jpg'
import './../../mobile screen/mobile_About.css'


export default function About () {

  // тест удаление данных из local storage
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
      localStorage.removeItem('basket')
      alert('local storage очищен')
    }
  })

  return (
    <div className="about_container main_container" id='about'>
      <div className="about_img">
        <img src= { img }  />
      </div>
      <div className="about_text">
        <h1>
          Наша команда
        </h1>
        <p>
          Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
        </p>
        <div className="about_text_img">
          <img src= {img1} />
          <img src= {img2} />
          <img src= {img3} />
        </div>
      </div>
    </div>
  )
}