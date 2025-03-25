import { useState } from 'react'
import  Footer from'./store/Footer.jsx'
import Header from './store/Header.jsx'
import MainSection from './store/MainSection.jsx'
import './App.css'
import About_MainSection from './store/About_MainSection.jsx'
function App() {

  

  return (
    <div className="box-border epilogue-font overflow-auto ">
      <Header />
        <About_MainSection/>
      <Footer />
    </div>
  )
}

export default App
