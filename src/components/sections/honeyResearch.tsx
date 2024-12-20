import { Button } from "../ui/button"

const HoneyResearch = () => {
    return (
        <section className="bg-background relative pt-3 pb-30">
            <div className="bg-[url('/images/honey/curve-bg.png')] bg-cover bg-no-repeat xl:py-[374px] lg:py-[280px] md:py-[230px] py-[200px]">
                <div className="lg:px-[138px] px-[15px] relative z-20">
                    <div className="max-w-[673px]">
                        <p className="lg:text-2xl text-xl font-medium text-[#40240C]">Honey Freshness" brings you the pure, natural essence of honey, directly from the hive. Carefully harvested to preserve its authentic flavor, our honey is rich in nutrients, vibrant in color, and packed with natural sweetness. Enjoy the taste of nature's finest in every drop</p>
                        <div className="flex xl:justify-center justify-start">
                            <Button size={"lg"} className="lg:w-[300px] lg:mt-[67px] mt-10 bg-accent">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute xl:-top-[47px] top-0">
                <img src="/images/honey/honey=bee.png" alt="honey" />
            </div>
            <div className="relative">
                <div className="">
                    <h1 className="lg:text-[128px] text-8xl font-italianno xl:ml-[268px] lg:ml-[200px] md:ml-[150px] ml-20 -translate-y-[70px]">Research</h1>
                    <div className="hidden lg:block lg:float-left left-0 -translate-y-[186px]">
                        <img src="/images/honey/honey-dripping-1.png" alt="img" />
                    </div>
                    <div className="flex md:justify-end pr-[58px] pl-[15px]">
                        <div className="flex md:flex-row flex-col md:items-center">
                            <div className="xl:-mt-[200px] -ml-6">
                                <img src="/images/honey/honey-drippin-2.png" alt="img" />
                            </div>
                            <div className="max-w-[448px]">
                                <h2 className="lg:text-[80px] text-[60px] font-italianno">About</h2>
                                <p className="font-medium text-[#40240C] tracking-[1.6px]">Honey is a golden, natural sweetener made by bees from  f lower nectar. Known for its rich flavor and health benefits,  honey is packed with antioxidants, enzymes, and nutrients,  making it a delicious and versatile addition to foods and  drinks.</p>
                            </div>
                        </div>
                    </div>
                    <p className="clear-both"></p>
                    <div className="lg:pl-[158px] pl-[15px] xl:-translate-y-[60px] mt-12 lg:mt-0">
                        <div className="max-w-[448px]">
                            <h2 className="lg:text-[80px] text-[60px] font-italianno">Benefits  Honey</h2>
                            <ul className="text-[#40240C]">
                                <li>-Energy Boost</li>
                                <li>-Immunity Support</li>
                                <li>-Soothes Sore Throats</li>
                                <li>-Aids Digestion</li>
                                <li>-Skincare.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute right-0 top-[409px] md:block hidden">
                        <img src="/images/honey/honey-dripping-3.png" alt="img" className="w-full h-auto" />
                    </div>
                    <p className="clear-both"></p>
                    <div className="flex lg:justify-end pr-[58px] pl-[15px] md:mt-20 mt-15">
                        <div>
                            <div className="lg:-ml-48">
                                <img src="/images/honey/honey-dripping-4.png" alt="img" />
                            </div>
                            <div className="max-w-[448px] lg:mt-[37px] mt-4">
                                <h2 className="lg:text-[80px] text-[60px] font-italianno">History  Honey</h2>
                                <p className="font-medium text-[#40240C] tracking-[1.6px]">Honey, valued for thousands of years, was  used by ancient civilizations for its sweetness and healing properties. It remains a timeless natural food.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HoneyResearch