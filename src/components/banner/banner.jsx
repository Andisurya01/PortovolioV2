import { motion } from "framer-motion"
import useMousePosition from "../../utils/useMousePosition"
import { useState } from "react";
import styles from './banner.module.css';

const Banner = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
        <section className="bg-Primary-Color md:py-20 pt-10 md:pl-20 pl-10 -translate-y-40 md:translate-y-0">
            <motion.div
                className="rounded-l-xl text-white overflow-hidden relative cursor-vertical-text">
                <motion.div
                    initial={{
                        opacity: 0,
                        height: 0,
                        width: 0,
                        y: 0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeIn"
                    }}
                    whileInView={{
                        opacity: 1,
                        height: 2000,
                        width: 2000
                    }}
                    className="rounded-sm bg-black absolute">
                </motion.div>
                <motion.div
                    className={styles.mask}
                    initial={{
                        opacity: 0,
                        duration: 2
                    }}
                    animate={isHovered ? {
                        WebkitMaskPosition: `${x - (size / 1.2)}px ${y - (size / 1.2)}px`,
                        WebkitMaskSize: `${size}px`,
                    } : {
                        WebkitMaskPosition: `${x - (size / 1.2)}px ${y - (size / 1.2)}px`,
                        WebkitMaskSize: `${size}px`,
                    }}
                    transition={{ type: "tween", ease: "backOut", duration: 1 }}
                    whileHover={{
                        opacity: 1
                    }}
                >
                    <h1 className="md:text-9xl text-6xl px-20 md:py-40 py-20 pr-96 text-white " onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
                        Ayo kenali saya lebih jauh
                        <motion.button
                            whileHover={{
                                scale: 1.2
                            }}
                            className=""
                        >
                            <motion.img
                                src="iconSet/arrow-outward-rounded.svg" className="inline pointer-events-none md:w-40 bg-eva01" />
                        </motion.button>
                    </h1>
                </motion.div>
                <div>
                    <h1 className="md:text-9xl text-6xl px-20 md:py-40 py-10 pr-96 text-black ">Ayo kenali saya lebih jauh
                        <motion.button
                            whileHover={{
                                scale: 1.2
                            }}
                            className=""
                        >
                            <motion.img
                                src="iconSet/arrow-outward-rounded.svg" className="inline pointer-events-none md:w-40 bg-eva01" />
                        </motion.button>
                    </h1>
                </div>
            </motion.div>
        </section>
    )
}

export default Banner