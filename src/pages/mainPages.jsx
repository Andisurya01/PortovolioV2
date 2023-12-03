import NavBar from "../components/navBar/navBar"
import Hero from "../components/hero/Hero"
import Project from "../components/project/project"
import About from "../components/about/about"
import HeaderProject from "../components/project/headerProject"
import TechStack from "../components/techStack/techStack"
import ButtomNavBar from "../components/navBar/buttomNavBar"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import Galerry from "../components/gallery/gallery"
import { useEffect, useRef } from "react"
import { AnimatePresence, useInView } from "framer-motion"
import Lenis from '@studio-freight/lenis'

const MainPages = () => {
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    const ref = useRef(null)
    const isInView = useInView(ref)
    useEffect(() => {
        console.log("is inviw?", isInView)
    }, [isInView])
    return (
        <div>
            <div className="">
                <div
                    ref={ref}>
                    <NavBar />
                </div>
                <Hero />
            </div>
            <About />
            <HeaderProject />
            <div className="flex flex-col">
                <Project title={"Project 1 - Role : frontend developer"}></Project>
                <Project title={"Project 2 - Role : frontend developer"}></Project>
                <Project title={"Project 3 - Role : frontend developer"}></Project>
                <Project title={"Project 4 - Role : frontend developer"}></Project>
                <Project title={"Project 5 - Role : frontend developer"}></Project>
            </div>
            <Galerry />
            <TechStack />
            <Banner />
            <Footer />
            <AnimatePresence>
                {isInView ? null : <ButtomNavBar />}
            </AnimatePresence>
        </div>
    )
}

export default MainPages