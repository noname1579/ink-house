import { createRoot } from 'react-dom/client'
import './reset.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Catalog from './components/catalog/Catalog'
import Promo from './components/promo/Promo'
import About from './components/about/About'
import { Footer } from './components/footer/Footer'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
    <Catalog />
    <About/>
    <Footer />
  </>
)
