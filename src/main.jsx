import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/HeaderSection';
import Footer from './components/FooterSection';
import MainCategorySection from './components/MainCateg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <MainCategorySection />
    <Footer/>
  </StrictMode>,
)
