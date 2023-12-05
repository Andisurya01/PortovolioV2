const TechStack = () => {
    return(
        <section className="mx-auto w-full px-10 bg-Primary-Color py-20">
            <h1>Tech Stack yang sering saya gunakan : </h1>
            <div className="flex py-5 flex-col md:flex-row">
                <img className="translate-y-5 md:translate-y-0" src="postgresql.svg"/>
                <img className="md:translate-y-2 scale-50 md:scale-100" src="express.svg"/>
                <img className="md:translate-y-1 -translate-y-20 scale-50 md:scale-100" src="reactjs.svg"/>
                <img className="md:translate-y-0 -translate-y-32 scale-50 md:scale-100" src="nodejs.svg"/>
            </div>
        </section>
    )
}

export default TechStack