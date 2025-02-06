import { createRoot } from 'react-dom/client'
import './reset.css'

import Header from './components/header/Header'
import Main from './components/main/Main'
import Catalog from './components/catalog/Catalog'

createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Main />
    <Catalog />
  </>
)
