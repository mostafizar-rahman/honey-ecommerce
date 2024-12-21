import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
const HeroBathroom = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-background mb-20"dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div className="bg-[url('/images/bathroom/bathroom-bg.png')] bg-no-repeat bg-cover  md:py-[131px] py-20 lg:pl-15 lg:px-0 px-[15px] grid md:grid-cols-[47.5%_auto] grid-cols-1 items-center">
                <div className="text-muted-foreground md:order-1 order-2">
                    <h1 className="lg:text-8xl md:text-[80px] text-7xl 2xl:leading-normal lg:leading-[0.7] md:leading-[0.7] leading-[0.7] font-italianno">{t("bathroom_acc")}</h1>
                    <p className="mt-[26px] lg:text-[32px] md:text-[26px] text-2xl font-bold opacity-60">{t("stylish_design")} </p>
                </div>
                <div className="md:order-2 order-1">
                    <img src="/images/bathroom/hero-img.png" alt="img" className="w-full h-auto" />
                </div>
            </div>
        </section>
    )
}

export default HeroBathroom