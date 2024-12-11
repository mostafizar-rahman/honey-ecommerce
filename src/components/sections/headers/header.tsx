import { menuList } from "@/db/menuList"
import HeaderSearch from "./headerSearch"
import MobileNavigation from "./mobileNavigation"
import HeaderExtraInfo from "./headerExtraInfo"

const Header = () => {
    return (
        <header className="px-[15px] lg:px-15 pt-12 bg-background">
            <div className="flex justify-between items-center mb-[88px]">
                <a href="/">
                    <img src="/public/images/logo.png" alt="logo" className="xl:w-auto w-32" />
                </a>
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
                                            <a href={path} className="text-primary-foreground xl:text-[32px] text-[26px] leading-normal capitalize">
                                                {label}
                                            </a>
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
            <HeaderSearch />
        </header>
    )
}

export default Header