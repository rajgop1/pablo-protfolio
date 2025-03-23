import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="box-border">
      <header className='flex justify-between p-[4%] pt-0 pb-0 h-[40px] text-center items-center font-semibold'>
        <div>Logo</div>
        <div className='flex gap-6 text-gray-500'>
          <nav>About</nav>
          <nav>Work</nav>
          <nav>Contact</nav>
        </div>
      </header>
      <section className='p-[6%] flex gap-4 items-center'>
        <div className='font-semibold text-xl w-[50%] p-[53.5px] pl-0 pr-0'>
          <p>Branding | Image making</p>
          <h1 className='text-[80px] mt-[40px] mb-[40px]'>My awesome portfolio</h1>
          <p>And I made it myself! Yes. In Figma with Anima</p>
        </div>
        <div className='w-[50%] h-[600px]'>
          <img src="https://cdn.pixabay.com/photo/2016/11/11/19/40/decorative-1817572_1280.png" alt="" />
        </div>
      </section>
      <hr className='w-[92%]  text-gray-400 mx-auto' />
      <section className='grid gap-6 grid-cols-5'>
        <div className='p-[30%]'></div>
        <div className='p-[30%]'></div>
        <div className='p-[30%]'></div>
        <div className='p-[30%]'></div>
        <div className='p-[30%]'></div>
      </section>
    </div>
  )
}

export default App
