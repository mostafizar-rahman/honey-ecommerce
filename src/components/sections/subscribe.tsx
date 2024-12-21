import { Input } from "../ui/input"
import { useTranslation } from "react-i18next";

const Subscribe = () => {
    const { t } = useTranslation();
    return (
        <section className="subscribe lg:px-15 px-[15px] lg:mt-[140px] mt-25">
            <h3 className="text-center lg:text-6xl text-5xl font-semibold mb-10 ">{t("get_now")}</h3>
            <Input
                placeholder={t("enter_email")}
           
                className="lg:px-10 px-7 lg:py-5 border-[8px] rounded-full font-normal max-w-[688px] mx-auto  "
            />
        </section>
    )
}

export default Subscribe