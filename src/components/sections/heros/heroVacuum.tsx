import { useTranslation } from "react-i18next";
const HeroVacuum = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-[url('/images/vacuum/hero-bg.png')] bg-cover bg-no-repeat bg-right-bottom lg:px-[58px] px-[15px] pt-[93px] pb-[424px]">
            <div className="text-[#0E5A99] max-w-[592px]">
                <h1 className="lg:text-[100px] md:text-[80px] text-7xl font-italianno">{t("vaccum")}</h1>
                <p className="lg:text-[32px] md:text-[26px] text-2xl font-bold opacity-60">{t("vaccum_detais")}</p>
            </div>
        </section>
    )
}

export default HeroVacuum