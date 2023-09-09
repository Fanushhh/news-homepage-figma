export const News = () => {
    return(
        <section className="px-4 py-6 mx-4 lg:mx-0 my-16 lg:my-0 bg-very-dark-blue lg:col-span-2">
             <h1 className="text-[32px] leading-[32px] text-soft-orange font-bold pb-[36px]">New</h1>
             <div>
                <p className="text-off-white text-xl  hover:text-soft-orange cursor-pointer font-bold transition-colors">Hydrogen VS Electric Cars</p>
                <p className="text-[15px] leading-6 text-dark-grayish-blue">Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr className=" my-6 border-1 border-soft-orange opacity-50"/>
             </div>
             <div>
                <p className="text-off-white text-xl  hover:text-soft-orange cursor-pointer font-bold transition-colors">The Downsides of AI Artistry</p>
                <p className="text-[15px] leading-6 text-dark-grayish-blue">What are the possible adverse effects of on-demand AI image generation?</p>
                <hr className=" my-6 border-1 border-soft-orange opacity-50"/>
             </div>
             <div>
                <p className="text-off-white text-xl pb-2 hover:text-soft-orange cursor-pointer font-bold transition-colors">Is VC Funding Drying Up?</p>
                <p className="text-[15px] leading-6 text-dark-grayish-blue">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
               
             </div>
        </section>
    )
}