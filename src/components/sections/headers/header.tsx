import { menuList as baseMenuList } from "@/db/menuList";
import { useTranslation } from "react-i18next"; 
import MobileNavigation from "./mobileNavigation"
import HeaderExtraInfo from "./headerExtraInfo"

import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
interface HeaderProps {
    language: string;
    setLanguage: (lang: string) => void;
   
}
const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const { t } = useTranslation();
    const pathName = useLocation().pathname;

    const findLogo = () => {
        if (pathName === "/" || pathName === "/doors" || pathName === "/vacuum") {
            return <img src="/images/logo.png" alt="logo" className="xl:w-auto w-32" />
        }
        else if (pathName === "/honey") {
            return <img src="/images/logo-honey.png" alt="logo" className="xl:w-auto w-32 " />
        }
        else if (pathName === "/shoes") {
            return <img src="/images/logo-shoes.png" alt="logo" className="xl:w-auto w-32 " />
        }
        else if (pathName === "/pan-organizer" || pathName === "/bathroom") {
            return <img src="/images/logo-bathroom.png" alt="logo" className="xl:w-auto w-32 " />
        }
        else if (pathName === "/t-shirt") {
            return <img src="/images/logo-t-shirt.png" alt="logo" className="xl:w-auto w-32 " />
        }
    }

    const paddingTop = () => {
        if (pathName === "/") {
            return "pt-12"
        }
        else if (pathName === "/t-shirt") {
            return "pt-[58px]"
        }
        else if (pathName === "/pan-organizer" || pathName === "/bathroom") {
            return "pt-6"
        }
        else if (pathName === "/doors" || pathName === "/vacuum") {
            return "pt-14"
        }
    }
      // Update menu list to reflect translations
      const menuList = baseMenuList.map(item => ({
        ...item,
        labelkey: t(item.labelKey) // Use translation based on a key
    }));

    return (
        <header  className={cn("header px-[15px] lg:px-15 bg-background", paddingTop())}
        dir={language === "Leabnese" ? "rtl" : "ltr"}>
            <div className="flex justify-between items-center pb-[88px]">
                <Link to="/">
                    {findLogo()}
                </Link>
                <div className="flex items-center xl:gap-[73px] gap-15">
                    <div className="lg:hidden block">
                        <MobileNavigation />
                    </div>
                    <nav className="lg:block hidden">
                        <ul className="flex gap-8 lg:flex-row flex-col">
                            {
                                menuList.map(({ id, labelkey, path }) => {
                                    return (
                                        <li key={id}>
                                            <Link to={path} className="xl:text-[32px] text-[26px] leading-normal capitalize">
                                                {labelkey}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="lg:flex gap-6 hidden">
                    <HeaderExtraInfo onLanguageChange={setLanguage} language={language} />
                    </div>
                </div>
            </div>
          
        </header>
    )
}

export default Header