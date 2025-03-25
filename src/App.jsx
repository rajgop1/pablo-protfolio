import { useState } from 'react'
import  Footer from'./ComponentsList/Footer.jsx'
import Header from './ComponentsList/Header.jsx'
import MainSection from './ComponentsList/MainSection.jsx'
import './App.css'
import AboutMainSection from './ComponentsList/AboutMainSection.jsx'
function App() {

  

  return (
    <div className="box-border epilogue-font overflow-auto ">
      <Header />
        <AboutMainSection/>
      <Footer />
    </div>
  )
}

export default App
