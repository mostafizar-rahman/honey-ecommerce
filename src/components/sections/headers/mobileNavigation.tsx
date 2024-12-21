import { menuList } from "@/db/menuList"
import HeaderExtraInfo from "./headerExtraInfo"
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const MobileNavigation = () => {

    const onLanguageChange = (lang: string) => {
        console.log(`Language changed to: ${lang}`);
    };
    return (
        <Sheet>
            <SheetTrigger>
                <Menu size={32}/>
            </SheetTrigger>
            <SheetContent>

                <nav>
                    <ul className="flex gap-4 flex-col">
                        {
                            menuList.map(({ id, labelKey, path }) => {
                                return (
                                    <li key={id}>
                                        <a href={path} className="text-[26px] leading-normal capitalize">
                                            {labelKey}
                                        </a>
                                    </li>
                                )
                            })
                        }
            
                    </ul>
                </nav>
                <div className="inline-flex flex-col gap-5 mt-5">
                <HeaderExtraInfo onLanguageChange={(lang: string) => onLanguageChange(lang)} />

                </div>
            </SheetContent>
        </Sheet>


    )
}

export default MobileNavigation