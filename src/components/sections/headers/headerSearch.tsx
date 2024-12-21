import { useEffect } from "react";
import { Input } from "@/components/ui/input"
import { HoHeart, HoSearch, HoUser } from "@/lib/icon"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
interface PropsType {
    textColor?: string,
    inputStyle?: string
    btnStyle?: string
    dir?: string
}
const HeaderSearch = ({ textColor, inputStyle, btnStyle }: PropsType) => {
    const { t } = useTranslation();
    useEffect(() => {
        // Set default language to English on hard refresh
        i18n.changeLanguage("en");
      }, []);
    return (
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <div className="search-field flex md:flex-row flex-col justify-between items-center lg:gap-x-[68px] gap-x-10 gap-y-6 lg:pb-30 pb-20 px-[15px] lg:px-15">
            <div className="relative flex w-full shrink">
            {/* Search Icon */}
            <p className={cn("absolute top-1/2 -translate-y-1/2 left-4 rtl:right-4 rtl:left-auto", textColor)}>
                <HoSearch className="lg:size-8 size-6" />
            </p>

            {/* Search Input */}
            <Input 
                placeholder={t("search_placeholder")} 
                className={cn("lg:pl-16 pl-10 pr-8 text-foreground rtl:lg:pl-8 rtl:pl-4 rtl:pr-16", inputStyle)} 
            />

            {/* Search Button */}
            <button 
                className={cn(
                    "lg:px-10 px-5 py-2.5 text-white lg:text-2xl text-xl font-bold -ml-4 rounded-tr-[20px] rounded-br-[20px] rtl:ml-0 rtl:-mr-4 rtl:rounded-tl-[20px] rtl:rounded-bl-[20px] rtl:rounded-tr-none rtl:rounded-br-none",
                    btnStyle
                )}
            >
                  {t("search")}
            </button>
        </div>
                <div className="flex lg:gap-12 gap-5 shrink-0">
                    <p className={cn("flex sm:gap-4 gap-2 items-center lg:text-2xl smLtext-xl text-lg font-bold cursor-pointer", textColor)}>
                        <span className="opacity-60 text-black"> <HoUser className="lg:size-[46px] size-9" /></span>
                       { t("personal_account")}
                    </p>
                    <p className={cn("flex sm:gap-4 gap-2 items-center lg:text-2xl smLtext-xl text-lg font-bold cursor-pointer", textColor)}>
                        <span className="opacity-60 text-black"> <HoHeart className="lg:w-[30px] lg:h-7 size-6" /></span>
                        { t("favorite")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch