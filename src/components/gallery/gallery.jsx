import { motion } from "framer-motion"
const Galerry = () => {

    const galleryContainer = {
        hover: {
            y: 5,
            opacity: 0.7
        }
    }

    return (
        <section>
            <h1 className="px-10 text-8xl font-medium pt-10">Gallery<span className="text-eva02">?</span></h1>
            <p className="px-10 font-medium pb-10 text-lg">Art, desain, dll... ah, me</p>
            <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-5">
                <motion.div
                    variants={galleryContainer}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-center bg-auto h-80 rounded-2xl col-span-2 overflow-hidden"
                >
                    <motion.div
                        initial={{
                            y: -650
                        }}
                    >
                        <img
                            src="gallery/matapink.png" className="" />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/gweh.jpg')] bg-center bg-cover h-80 rounded-2xl overflow-hidden flex justify-center"></motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/belajarmata.png')] bg-center bg-cover h-80 rounded-2xl "></motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/maiai.png')] bg-center bg-cover h-80 rounded-2xl "></motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/belajarmuka.png')] bg-center bg-cover h-80 rounded-2xl "></motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/belajartangan.png')] bg-center bg-cover h-80 rounded-2xl "></motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg bg-[url('gallery/PNGkontenkoding.png')] bg-center bg-contain bg-white h-80 rounded-2xl col-span-2"></motion.div>
            </div>
        </section>
    )
}

export default Galerry