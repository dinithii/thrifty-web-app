import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderSection from './components/HeaderSection';
import MainCategorySection from './components/MainCateg';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderSection/>
    <MainCategorySection />
  </StrictMode>,
)
