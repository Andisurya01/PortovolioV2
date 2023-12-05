import { motion } from "framer-motion"
const About = () => {
    const about = ["A", "b", "o", "u", 't']
    const text = {
        init: {
            opacity: 0,
            y: 100
        },
        atLook: {
            opacity: 1,
            y: 0,
        },
        transition: {
            delay: 0.05,
            duration: 1.5
        }
    }
    return (
        <section className="mx-auto">
            <div className="text-white bg-black  rounded-t-xl grid grid-cols-1 md:grid-cols-6 px-10 md:py-40 py-20">
                <div className="col-span-2 pb-8 text-center md:text-start">
                    {about.map((name, index) => {
                        return (
                            <motion.span
                                variants={text}
                                initial="init"
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.05 * index,
                                    duration: 1.5
                                }}
                                className="text-8xl"
                                key={index}
                            >{name}</motion.span>
                        )
                    })}
                </div>
                <div className="col-span-4 text-xl">
                    <motion.p
                        variants={text}
                        initial="init"
                        whileInView="atLook"
                        transition="transition">
                        Halo, saya<span className="bg-eva01 px-2 text-black">Andi Surya Priyadi</span>, seorang mahasiswa semester 6 di jurusan Teknik Informatika. Saya memiliki semangat yang besar dalam dunia pengembangan web front-end dan telah mengembangkan keterampilan saya dalam menciptakan antarmuka pengguna yang menarik dan responsif.</motion.p>
                    <motion.p
                        variants={text}
                        initial="init"
                        whileInView="atLook"
                        transition="transition">
                        <br />Selama perjalanan akademis saya, saya telah terlibat dalam berbagai proyek pengembangan web yang melibatkan HTML, CSS, dan JavaScript. Saya memiliki pengetahuan yang solid tentang desain responsif dan up-to-date dengan kerangka kerja terkini seperti ReactJS.</motion.p>
                    <motion.p
                        variants={text}
                        initial="init"
                        whileInView="atLook"
                        transition="transition">
                        <br />Dalam pengalaman saya, saya berhasil mengimplementasikan desain web yang menarik dan fungsional untuk memastikan pengalaman pengguna yang optimal. Sebagai mahasiswa yang aktif, saya juga senang berkolaborasi dengan teman-teman sekelas dan terbuka untuk belajar hal baru setiap hari.</motion.p>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About