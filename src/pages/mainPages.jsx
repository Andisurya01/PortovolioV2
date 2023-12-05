import NavBar from "../components/navBar/navBar"
import Hero from "../components/hero/Hero"
import About from "../components/about/about"
import TechStack from "../components/techStack/techStack"
import ButtomNavBar from "../components/navBar/buttomNavBar"
import Footer from "../components/footer/footer"
import Banner from "../components/banner/banner"
import Galerry from "../components/gallery/gallery"
import { useRef } from "react"
import { AnimatePresence, useInView } from "framer-motion"
import PageProject from "../components/project/page"

const MainPages = () => {

    const ref = useRef(null)

    const isInView = useInView(ref)
    return (
        <div>
            <div className="relative"
                ref={ref}>
                <div>
                    <NavBar />
                </div>
                <Hero >
                </Hero>
            </div>
            <div className="">
                <About />
            </div>
            <PageProject/>
            <div
            >
                <Galerry />
            </div>
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