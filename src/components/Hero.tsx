export const Hero = () => {
    return(
        <section className="px-4 lg:col-span-4 w-full lg:px-0">
            <div>
                <picture>
                    <source media="(max-width:600px)" srcSet="./images/image-web-3-mobile.jpg"/>
                    <source media="(min-width:601px)" srcSet="./images/image-web-3-desktop.jpg"/>
                    <img src="/images/image-web-3-mobile.jpg" alt="image for web-3 model" />
                </picture>
            </div>
            <div className="lg:flex  lg:pt-7 lg:gap-12">
                <h1 className=" text-[40px] leading-[40px] lg:w-1/2 font-extrabold pt-6 pb-4 lg:text-[56px] lg:leading-[56px] lg:p-0">The Bright Future of Web 3.0?</h1>
                <div className="lg:w-1/2">
                    <p className=" text-dark-grayish-blue text-[15px] pb-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className="bg-soft-red text-white uppercase tracking-[4.37px] py-3 px-8">Read more</button>
                </div>
            </div>
        </section>
    )
}