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
                    className="w-full drop-shadow-lg bg-auto h-80 bg-[url('/gallery/matapink.png')] rounded-2xl col-span-2 overflow-hidden"
                >
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl overflow-hidden">
                        <motion.div
                        initial={{
                            y: -0
                        }}
                    >
                        <img
                            src="gallery/gweh.jpg" className="" />
                    </motion.div>
                    </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl overflow-hidden ">
                    <motion.div
                        initial={{
                            y: -0
                        }}
                    >
                        <img
                            src="gallery/belajarmata.png" className="" />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl overflow-hidden ">
                    <motion.div
                        initial={{
                            y: -0
                        }}
                    >
                        <img
                            src="gallery/maiai.png" className="" />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl overflow-hidden ">
                    <motion.div
                        initial={{
                            y: -0
                        }}
                    >
                        <img
                            src="gallery/belajarmuka.png" className="" />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl overflow-hidden ">
                    <motion.div
                        initial={{
                            y: -0
                        }}
                    >
                        <img
                            src="gallery/belajartangan.png" className="" />
                    </motion.div>
                </motion.div>
                <motion.div
                    variants={galleryContainer}
                    initial={"init"}
                    whileHover={"hover"}
                    className="w-full drop-shadow-lg h-80 rounded-2xl bg-white col-span-2">
                    <motion.div
                        initial={{
                            y: -700,
                            scale : 0.5
                        }}
                    >
                        <img
                            src="gallery/PNGkontenkoding.png" className="" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Galerry