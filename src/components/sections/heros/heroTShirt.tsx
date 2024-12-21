import { useTranslation } from "react-i18next";

const HeroTShirt = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-[linear-gradient(180deg,_#1A1400_33.33%,_#E5E0CF_99.9%)] mb-20 pb-30 lg:px-[45px] px-[15px] flex lg:flex-row flex-col gap-x-[116px] overflow-hidden">
            <div className="relative flex items-center justify-center max-w-[595px] mx-auto">
                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-destructive-foreground [text-shadow:_4px_5px_1px_#E4DECA] md:text-8xl sm:text-7xl text-6xl font-bold">
                    <p className="flex justify-between w-[calc(100%_-80px)]"><span>New</span> <span className="relative z-50">New</span></p>
                    <p>COLLECTION</p>
                    <p className="flex justify-between w-[calc(100%_-35px)]"><span>New</span><span className="relative z-50">New</span></p>
                    <p><span>COLLECTION</span></p>
                </div>

                <div className="relative -ml-5">
                    <img src="/images/t-shirt/hoodie-big.png" alt="Hoodie Design" className="w-full h-auto mx-auto" />
                </div>
            </div>
            <div className="lg:mt-[92px] mt-5">
                <div className="text-center">
                    <p className="text-destructive-foreground xl:text-5xl lg:text-[40px] text-4xl">Center</p>
                    <h1 className="xl:text-[88px] lg:text-[70px] md:text-6xl text-[50px] font-bold text-white">TASHKILA</h1>
                    <p className="text-destructive-foreground lg:text-[32px] text-[26px]">’Every man has a story . What’s yours ’ </p>
                </div>
                <div className="lg:mt-8 mt-5 grid justify-center">
                    <p className="text-center text-white xl:text-5xl lg:text-[40px] text-4xl">{t("new_collection")}</p>
                    <div className="flex justify-center flex-wrap">
                        <img src="/images/t-shirt/hoodie.png" alt="img" className="max-w-[204px] w-full h-auto" />
                        <img src="/images/t-shirt/hoodie.png" alt="img" className="max-w-[204px] w-full h-auto" />
                        <img src="/images/t-shirt/hoodie.png" alt="img" className="max-w-[204px] w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroTShirt