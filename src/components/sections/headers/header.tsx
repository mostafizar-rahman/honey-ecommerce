import { menuList } from "@/db/menuList"
import MobileNavigation from "./mobileNavigation"
import HeaderExtraInfo from "./headerExtraInfo"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const Header = () => {
    const pathName = useLocation().pathname

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

    return (
        <header className={cn("header px-[15px] lg:px-15 bg-background", paddingTop())}>
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
                                menuList.map(({ id, label, path }) => {
                                    return (
                                        <li key={id}>
                                            <Link to={path} className="xl:text-[32px] text-[26px] leading-normal capitalize">
                                                {label}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div className="lg:flex gap-6 hidden">
                        <HeaderExtraInfo />
                    </div>
                </div>
            </div>
            {/* <HeaderSearch /> */}
        </header>
    )
}

export default Header