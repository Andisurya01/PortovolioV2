const Galerry = () => {

    return (
        <section>
            <h1 className="px-10 text-8xl font-medium py-10">Gallery<span className="text-eva02">?</span></h1>
            <div className="grid grid-cols-3 px-10 gap-5">
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl col-span-2 "></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl overflow-hidden flex justify-center"></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl "></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl "></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl "></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl "></div>
                <div style={{backgroundImage: `url("gallery/gweh.jpg")`}} className="w-full drop-shadow-lg bg-center bg-cover h-60 rounded-2xl col-span-2"></div>
            </div>
        </section>
    )
}

export default Galerry