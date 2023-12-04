const Galerry = () => {

    return(
        <section>
            <h1 className="px-10 text-8xl font-medium py-10">Gallery<span className="text-eva02">?</span></h1>
            <div className="grid grid-cols-3 px-10 gap-5">
                <div className="w-full h-60 bg-black rounded-2xl col-span-2 ">
                    
                </div>
                <div className="w-full  h-60 rounded-2xl overflow-hidden flex justify-center">
                <img src="gallery/gweh.jpg" width={200}/>
                </div>
                <div className="w-full bg-black h-60 rounded-2xl "></div>
                <div className="w-full bg-black h-60 rounded-2xl "></div>
                <div className="w-full bg-black h-60 rounded-2xl "></div>
                <div className="w-full bg-black h-60 rounded-2xl "></div>
                <div className="w-full bg-black h-60 rounded-2xl col-span-2"></div>
            </div>
        </section> 
    )
}

export default Galerry