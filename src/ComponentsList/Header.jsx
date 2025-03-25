import React from "react"


function Header() {
    return (
        <header className='flex justify-between w-[92%] h-[80px] text-center items-center font-semibold mx-auto relative'>
            <div>Logo</div>
            <div className="w-[25px] h-[23px] sm:collapse visible sm:w-0 sm:h-0 justify-end absolute right-0">
                <img src="src\assets\Menu.png" alt="" />
            </div>
            <div className='flex gap-[10%] text-gray-500 sm:w-[50%] w-0 justify-end collapse sm:visible '>
                <nav>About</nav>
                <nav>Work</nav>
                <nav>Contact</nav>
            </div>
            
        </header>
    )
}

export default  Header