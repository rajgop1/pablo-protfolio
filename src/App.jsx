import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="box-border epilogue-font overflow-auto ">


      <header className='flex justify-between w-[92%] h-[80px] text-center items-center font-semibold mx-auto'>
        <div>Logo</div>
        <div className='flex gap-[10%] text-gray-500 w-[50%] justify-end '>
          <nav>About</nav>
          <nav>Work</nav>
          <nav>Contact</nav>
        </div>
      </header>





      <section className='w-[82%] mx-auto flex mt-[9%] mb-[9%] items-center'>
        <div className='font-semibold text-xl w-[50%] my-auto mt-[5.5%] mb-[5.5%] '>
          <p>Branding | Image making</p>
          <h1 className='text-[80px] mt-[5.5%] mb-[5.5%]'>My awesome portfolio</h1>
          <p>And I made it myself! Yes. In Figma with Anima</p>
        </div>
        <div className='w-[50%] '>
          <img src="https://cdn.pixabay.com/photo/2016/11/11/19/40/decorative-1817572_1280.png" alt="" />
        </div>
      </section>





      <hr className='w-[82%] mx-auto text-gray-400  ' />


      <section className='grid gap-6 grid-cols-5 text-center items-center justify-between w-[82%] mx-auto'>
        <div className='p-[60px]'>apoorva</div>
        <div className='p-[60px]'>apoorva</div>
        <div className='p-[60px]'>apoorva</div>
        <div className='p-[60px]'>apoorva</div>
        <div className='p-[60px]'>apoorva</div>
      </section>


      <hr className='w-[82%] mx-auto text-gray-400  ' />






      <section className='w-[81%] mt-[13.5%] mb-[13.5%] grid grid-cols-3 mx-auto  text-center '>
        <div className='w-250px h-[328px] mx-auto'>
          <div className="h-[186px] w-[250px] ">
            <img className='object-cover' src="https://t4.ftcdn.net/jpg/05/61/13/61/360_F_561136149_V7GT6r7BL2GSdK5ZzcRUXUlhgCxCYq2q.jpg" alt="" />
          </div>
          <h3 className='font-semibold text-[27px] w-[250px] mb-[19px]'>Product design</h3>
          <p className='text-gray-500 text-[15px] w-[250px] h-[81px] '>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>

        <div className='w-250px h-[328px] mx-auto'>
          <div className="h-[186px] w-[250px] ">
            <img className='object-cover' src="https://t4.ftcdn.net/jpg/05/61/13/61/360_F_561136149_V7GT6r7BL2GSdK5ZzcRUXUlhgCxCYq2q.jpg" alt="" />
          </div>
          <h3 className='font-semibold text-[27px] w-[250px] mb-[19px]'>Product design</h3>
          <p className='text-gray-500 text-[15px] w-[250px] h-[81px] '>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>

        <div className='w-250px h-[328px] mx-auto'>
          <div className="h-[186px] w-[250px] ">
            <img className='object-cover' src="https://t4.ftcdn.net/jpg/05/61/13/61/360_F_561136149_V7GT6r7BL2GSdK5ZzcRUXUlhgCxCYq2q.jpg" alt="" />
          </div>
          <h3 className='font-semibold text-[27px] w-[250px] mb-[19px]'>Product design</h3>
          <p className='text-gray-500 text-[15px] w-[250px] h-[81px] '>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>


      </section>





      <section className="w-[82%] mx-auto">
        <h2 className='text-center pt-[20px] pb-[60px] text-[32px] font-semibold'>
          My Greatest Work
        </h2>


        <div className='justify-between grid grid-cols-3 gap-y-[60px] '>

          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>


          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>


          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>


          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>

          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>


          <div className='w-[315px] h-[407px] text-left mx-auto'>
            <div className='w-[315px] h-[315px] mb-[25px] overflow-hidden'>
              <img className='object-cover' src="https://c.stocksy.com/a/r1v400/z9/1172535.jpg" alt="" />
            </div>
            <p className='mb-10px w-[315px]'>Free Bird</p>
            <p className='text-gray-500 w-[315px]'>Lynyrd Skynyrd</p>
          </div>





        </div>
      </section>


      <section className='w-[81%] mt-[8%] mb-[8%]   mx-auto '>
        <h3 className='text-center text-[32px] font-semibold mb-[55px] mx-auto'>
          Clients
        </h3>


        <div className='grid grid-cols-3 text-left mx-auto'>


          <div className='w-[315px] h-[344px] flex flex-col p-[30px]  bg-yellow-50 border-[1.5px] border-yellow-300 mx-auto'>
            <p className=' font-semibold text-xl pb-[80px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className='flex gap-[20px]'>
              <div className='w-[50px] h-[50px] '>
                <img src="https://s3-alpha-sig.figma.com/img/3e16/f900/38088640b726c5fa8c491dcea83e103b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T~zAQDQvbhxLbaV3YrSho7AFlMqzbaO9Pqps5Tdz5IwG8TJtgOfB924wYIzuTgdBO8o2nxP2guD3~~euh7zofwDdEawsE54mRAQbcJuICOTmXE~NKZnrRkdOwFdjiG~ToDJYqwkInfQH7NDSwaNI8UteQj0yuePG2W956eaQWrhszqTfxd17R1p4DiuxXP41K2nCgnTscsAsX~WYJ2jKJ0YUL5PbH4PDaPp1ydzFKH6llqM3c~fQKnPQR7xaIHCYPg5OwwGiFzRCkyq1N18bod50A9JUsMnWOI7vJdNk~2F69MZPjhRfkoYGyWYnfwqKqPw7GuVS51qqeLyq8go6eg__" alt="customer image" />
              </div>
              <div className='flex flex-col'>
                <div className='pb-[10px] flex gap-1'>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                </div>
                <div className='text-[17px] font-normal text-gray-800 text-left'>Gemma Nolen,<br /> Google</div>
              </div>
            </div>
          </div>

          <div className='w-[315px] h-[344px] flex flex-col p-[30px] bg-yellow-50 border-[1.5px] border-yellow-300 mx-auto '>
            <p className=' font-semibold text-xl pb-[80px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className='flex gap-[20px]'>
              <div className='w-[50px] h-[50px] '>
                <img src="https://s3-alpha-sig.figma.com/img/f5fb/7eef/71930e0074d4a3bb57cb12ae68f829e5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WmwgKvFxfuSg1kuEJwcfO4lH0zuH9Ly33G6ffiREptpEENMh2vlokADRn8EV~9dFnV~CA4szEvJ2Ak8NDkMOHp7DVYDMMlpZDaffzi35p0iBvUgkUNXJmeh-aIdFgL7-2YW~wt8Tf1exeaDsXMwxeKHrmwGalwvsoYZao~7QHSlSZRv-w4VAkVt2wnjxPG3ee6FjRbMfOCjoWOXS3J6qjY6huWNkOxYtIzBWc1Og1MKbXCZO8x~lotntB-WpKWeDzSl4~c61gtl-geqK1Bl6bSKuh2LT2izOAaG7EYRVebetU1vDVMyNHfRCntyKl-qzg4kmCos8tGlOa8kus2B05A__" alt="customer image" />
              </div>
              <div className='flex flex-col'>
                <div className='pb-[10px] flex gap-1'>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                </div>
                <div className='text-[17px] font-normal text-gray-800 text-left'>Gemma Nolen,<br /> Google</div>
              </div>
            </div>
          </div>


          <div className='w-[315px] h-[344px] flex flex-col p-[30px] bg-yellow-50 border-[1.5px] border-yellow-300 mx-auto'>
            <p className=' font-semibold text-xl pb-[80px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <div className='flex gap-[20px]'>
              <div className='w-[50px] h-[50px] '>
                <img src="https://s3-alpha-sig.figma.com/img/3e16/f900/38088640b726c5fa8c491dcea83e103b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T~zAQDQvbhxLbaV3YrSho7AFlMqzbaO9Pqps5Tdz5IwG8TJtgOfB924wYIzuTgdBO8o2nxP2guD3~~euh7zofwDdEawsE54mRAQbcJuICOTmXE~NKZnrRkdOwFdjiG~ToDJYqwkInfQH7NDSwaNI8UteQj0yuePG2W956eaQWrhszqTfxd17R1p4DiuxXP41K2nCgnTscsAsX~WYJ2jKJ0YUL5PbH4PDaPp1ydzFKH6llqM3c~fQKnPQR7xaIHCYPg5OwwGiFzRCkyq1N18bod50A9JUsMnWOI7vJdNk~2F69MZPjhRfkoYGyWYnfwqKqPw7GuVS51qqeLyq8go6eg__" alt="customer image" />
              </div>
              <div className='flex flex-col'>
                <div className='pb-[10px] flex gap-1'>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                  <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
                </div>
                <div className='text-[17px] font-normal text-gray-800 text-left'>Gemma Nolen,<br /> Google</div>
              </div>
            </div>
          </div>


        </div>




      </section>


      <hr className='w-[82%] mx-auto text-gray-400 ' />

      <section className='mt-[70px] w-[82%] mx-auto flex'>
        <div className='w-[50%] pr-[190px]'>
          <h3 className='font-semibold text-[32px] pb-[40px]'>
            Let’s work together
          </h3>
          <p className='font-normal text-normal text-gray-500 pb-[60px]'>
            This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
          </p>
          <div className='flex gap-3'>
            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
          </div>
        </div>


        <form className='w-[50%] flex flex-col gap-[20px] pb-[70px]'>
          <div className='p-[30px] h-[69px] bg-gray-100'>
            <label className='pr-[20px] text-gray-600 text-[17px]' htmlFor="#name">Name</label>
            <input id='name' type="text" placeholder='' />
          </div>

          <div className='p-[30px] h-[69px] bg-gray-100'>
            <label className='pr-[20px] text-gray-600 text-[17px]' htmlFor="#email">Email</label>
            <input id='email' type="email" placeholder='' />
          </div>

          <div className='p-[30px] h-[231px] bg-gray-100'>
            <label className='pr-[20px] text-gray-600 text-[17px]' htmlFor="#name">Name</label>
            <input  className='' id='name' type="text" placeholder='' />
          </div>

          <button className='mt-[20px] bg-black text-white text-[20px] font-semibold w-[235px] h-[80px] '>
            Submit
          </button>

        </form>
      </section>
    </div>
  )
}

export default App
