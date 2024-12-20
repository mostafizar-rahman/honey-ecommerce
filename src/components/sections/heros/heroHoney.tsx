const HeroHoney = () => {
    return (
        <section className="bg-background pb-[88px]">
            <img src="/images/honey/hero-top-shape.png" alt="img" />
            <div className="text-[#40240C] text-center relative z-10 mt-20">
                <div className="absolute z-[-1] -top-[64px]">
                    <img src="/images/honey/bee.png" alt="bee" className="w-full h-auto" />
                </div>

                <p className="text-4xl font-bold tracking-[3.6px] lg:mb-8 mb-4">Online Store</p>
                <h2 className="lg:text-[64px] text-[50px] font-black tracking-[6.4px]">ORGANIC HONEY</h2>
                <p className="lg:mt-6 mt-3 lg:text-[40px] text-3xl font-bold tracking-[4px]">From The Manufacturer</p>
            </div>
        </section>
    )
}

export default HeroHoney