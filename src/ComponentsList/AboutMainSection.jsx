import React from 'react'

function AboutMainSection() {
  return (
    <main>
      <section className='bg-pink-100'>
        <div className='pt-[120px] pb-[120px] w-[80%] flex sm:flex-row flex-col sm:gap-[70px] gap-4 justify-center items-center mx-auto'>
          <div className='flex flex-col '>
            <div className='w-[195px] h-[195px]'>
            <img className=' object-cover' src="src\assets\Image.png" alt="my image" />
            </div>
            <p className='font-bold text-[17px] pt-[20px]'>Pablo Designero</p>
            <p className='text-[17px]'>Designer & Unicorn Trainer</p>
          </div>
          <div>
            <h2 className='font-bold text-[17px] pt-[78px] sm:pt-0'>Bio:</h2>
            <p className='text-[17px] lg:w-[515px] '>
              Father of 3 humans, 5 unicorns & 2 dogs, I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.
            </p>
          </div>

        </div>
      </section>
      <section>
        <div className='pt-[120px] pb-[120px] flex flex-col justify-center items-center w-[90%]  lg:w-[840px] mx-auto text-justify '>
          <p className='pb-[60px] text-2xl font-medium tracking-[1px]'>When I was 5, I got adbucted by a unicorn family. When they returned me to earth, I joined a designer school. But, fo’ real, what I learned with my kidnaptive family really gave an edge to my creative language.</p>
          <p className='font-semibold text-base color-green w-[100%] pl-0  p-[4px] text-white'>Being a human is way too complicated. Time to be a unicorn.</p>
          <p className='font-semibold text-base e h-fit w-[100%] pl-0 p-[4px] text-gray-600'>Try it and you’ll see. Then your Figma files are just gonna fly in color, glitter, interactions and autolayout..</p>
          <p className='font-semibold text-base color-green w-[100%] pl-0 p-[4px] text-white'>Also, grow a beard. Check my bio if that is not clear.</p>
          <p className='font-semibold  w-[100%] pl-0 p-[4px]  text-gray-600'>Available for projects, from Monday to Tuesday, mainy between 14 and 16. (Unless there is a unicorn race on TV - DUH -in that case, come back another day).</p>
          <p className='font-semibold text-base h-fit w-[100%] pl-0  text-gray-600'>Projects include, RocknRoll covers, furniture refurbishing, Unicorn potty training and more.</p>
        </div>
      </section>
      <hr className='w-[82%] mx-auto text-gray-400 ' />


    </main>
  )
}

export default AboutMainSection