
function Header() {
  return (
    
    <header className="py-6 bg-gray-200">
        <div className="container max-w-screen-lg mx-auto flex justify-between items-center font-Jost ">
            <a className="font-bold text-2xl" href="#">Brand Logo</a>
            <ul className="flex">
                <li className="ml-6 hover:text-rose-600 duration-300 text-xl"><a href="#">About</a></li>
                <li className="ml-6 hover:text-rose-600 duration-300 text-xl"><a href="#">Home</a></li>
                <li className="ml-6 hover:text-rose-600 duration-300 text-xl"><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
  )
}

export default Header