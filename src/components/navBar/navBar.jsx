import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="p-10 absolute w-full">
            <div className="bg-white flex justify-between drop-shadow-xl rounded-lg">
                <h1 className="font-normal text-black py-3 px-5">ANDI SURYA PRIYADI</h1>
                <div className="py-3 px-4 font-normal text-black">
                    <Link to={'/Hero'} className="px-2">home</Link>
                    <Link to={''} className="px-2">About</Link>
                    <Link to={''} className="px-2">Project</Link>
                    <Link to={''} className="px-2">Gallery</Link>
                </div>
            </div>

        </nav>
    )
}

export default NavBar