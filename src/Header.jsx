function Header() {
    return (
        <header className='flex justify-between w-[92%] h-[80px] text-center items-center font-semibold mx-auto'>
            <div>Logo</div>
            <div className='flex gap-[10%] text-gray-500 w-[50%] justify-end '>
                <nav>About</nav>
                <nav>Work</nav>
                <nav>Contact</nav>
            </div>
        </header>
    )
}

export default  Header