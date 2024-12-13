import { Button } from "../ui/button"

const HoneyResearch = () => {
    return (
        <section className="bg-background relative">
            <div className="bg-[url('/images/honey/curve-bg.png')] bg-cover bg-no-repeat xl:py-[374px] lg:py-[280px] md:py-[230px] py-[200px]">
                <div className="lg:px-[138px] px-[15px]">
                    <div className="max-w-[673px]">
                        <p className="text-2xl font-medium text-[#40240C]">Honey Freshness" brings you the pure, natural essence of honey, directly from the hive. Carefully harvested to preserve its authentic flavor, our honey is rich in nutrients, vibrant in color, and packed with natural sweetness. Enjoy the taste of nature's finest in every drop</p>
                        <div className="flex justify-center">
                            <Button size={"lg"} className="lg:w-[300px] mt-[67px] bg-accent">SHOP NOW</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute xl:-top-[445px] lg:-top-[350px] md:-top-[220px] sm:-top-[80px] top-0">
                    <img src="/images/honey/honey=bee.png" alt="honey" />
                </div>
            </div>
            <div>
                <h1 className="text-[128px] font-italianno text-accent-foreground">Research</h1>
                <div>
                    <img src="/images/honey/honey-dripping-1.png" alt="img"/>
                </div>
            </div>
        </section>
    )
}

export default HoneyResearch