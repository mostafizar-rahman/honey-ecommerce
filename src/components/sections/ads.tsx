import { Button } from "../ui/button"

const Ads = () => {
    return (
        <section className="max-w-[1142px] mx-auto lg:mt-[200px] lg:mb-30 mb-20 mt-30">
            <div>
                <h2 className="uppercase text-secondary-foreground text-center lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold">ORDER NOW EVERYTHING YOU NEED</h2>
                <h3 className="text-center text-[rgba(82,131,171,0.60)] lg:text-[40px] text-3xl lg:leading-[150%] font-bold mt-4">Order now and get everything you need to make your home complete!  From essential household items to stylish decor, we have everything to  simplify your life and elevate your space. <span className="text-secondary-foreground font-black">Don't wait !</span></h3>
            </div>
            <div className="flex justify-center flex-wrap gap-x-[84px] lg:mt-[64px] mt-10">
                <div>
                    <img src="/images/ads-img.png" alt="img" />
                </div>
                <div>
                    <div className="max-w-[370px] mx-auto">
                        <p className="py-2.5 px-3 text-white bg-[#173840] lg:text-2xl text-xl font-semibold inline-block rounded-tl-sm rounded-tr-md rounded-br-md rounded-bl-md ml-2">
                            MEGA OFFER
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2.5">
                                <h2 className="lg:text-[80px] text-6xl font-bold uppercase text-[#173840]">BLACK</h2>
                                <p className="lg:text-[32px] text-[26px] text-[#173840]">Up to <span className="font-bold text-[#47B5CC] block">50%</span> </p>
                            </div>
                            <h2 className="lg:text-[80px] text-6xl font-bold uppercase text-[#47B5CC]">FRIDAY</h2>
                        </div>
                        <div className="flex justify-end mr-10">
                            <p className="py-2.5 px-3 text-white bg-[#173840] font-semibold inline-block rounded-tl-sm rounded-tr-md rounded-br-md rounded-bl-md">
                                SUPER SALE
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-[34px]">
                        <Button size={"lg"} className="lg:w-[300px]">SHOP NOW</Button>
                        <p className="lg:text-[32px] text-[26px] font-semibold text-[#163840] mt-8">96176591765</p>
                        <p className="lg:text-2xl text-xl uppercase text-[#163840] lg:mt-3 mt-2">WWW.MEEMHOME.COM</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ads