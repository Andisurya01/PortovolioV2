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
        className="p-10 flex justify-center fixed inset-x-0 bottom-0 ">
            <div className="bg-white drop-shadow-xl rounded-lg">
                <div className="py-3 px-4 font-normal text-black flex">
                    <button className="px-2" >home</button>
                    <button className="px-2" >About</button>
                    <button className="px-2" >Project</button>
                    <button className="px-2" >Gallery</button>

                </div>
            </div>

        </motion.nav>
    )
}

export default ButtomNavBar