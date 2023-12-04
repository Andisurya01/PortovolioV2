import H1Herro from "./h1Herr0"

const Hero = () => {
    return (
        <section className="">
            <div className="bg-Primary-Color h-screen overflow-hidden">
                <H1Herro initial={0}/>
                <H1Herro initial={-250} animate={-150}/>
                <H1Herro initial={-500} animate={-400}/>
                <H1Herro initial={-1000} animate={-900} bgColor={"#8bd450"}/>
                <H1Herro initial={-0} animate={100}/>
                <H1Herro initial={-250} animate={-150}/>
                <H1Herro initial={-500} animate={-400}/>
                <H1Herro initial={-1000} animate={-900}/>
            </div>
        </section>
    )
}

export default Hero