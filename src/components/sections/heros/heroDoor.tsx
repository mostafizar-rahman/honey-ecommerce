import { useTranslation } from "react-i18next";
const HeroDoor = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-[url('/public/images/doors/hero-bg.png')] bg-no-repeat bg-cover bg-right lg:pt-[149px] pt-25 xl:pb-[452px] lg:pb-[350px] pb-[250px] lg:px-[76px] px-[15px] mb-20">
            <div className="text-[#D5E4F0] max-w-[554px]">
                <h1 className="lg:text-[100px] md:text-[80px] text-7xl font-italianno">{t("door")}</h1>
                <p className="lg:text-[32px] md:text-[26px] text-2xl font-bold">{t("door_details")}</p>
            </div>
        </section>
    )
}

export default HeroDoor