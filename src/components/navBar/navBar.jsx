const NavBar = () => {
    return (
        <nav className="p-10 absolute w-full">
            <div className="bg-white flex justify-between drop-shadow-xl rounded-lg">
                <h1 className="font-normal text-black py-3 px-5">ANDI SURYA PRIYADI</h1>
                <div className="py-3 px-4 font-normal text-black">
                    <button  className="px-2">home</button>
                    <button  className="px-2">About</button>
                    <button  className="px-2">Project</button>
                    <button  className="px-2">Gallery</button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar