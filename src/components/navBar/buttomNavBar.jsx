import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const ButtomNavBar = () => {
    return (
        <motion.nav
        initial={{
            opacity : 0
        }} 
        animate={{
            opacity : 1,
        }}
        exit={{
            opacity : 0
        }}
        className="p-10 flex justify-center  fixed inset-x-0 bottom-0 ">
            <div className="bg-white drop-shadow-xl rounded-lg">
                <div className="py-3 px-4 font-normal text-black">
                    <Link to={'/Hero'} className="px-2">home</Link>
                    <Link to={''} className="px-2">home</Link>
                    <Link to={''} className="px-2">home</Link>
                    <Link to={''} className="px-2">home</Link>
                </div>
            </div>

        </motion.nav>
    )
}

export default ButtomNavBar