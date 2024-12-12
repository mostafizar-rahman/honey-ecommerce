import { Input } from "@/components/ui/input"
import { HoHeart, HoSearch, HoUser } from "@/lib/icon"
import { Link } from "react-router-dom"

const HeaderSearch = () => {
    return (
        <div>
            <div className="flex flex-wrap gap-5 mb-5">
                <Link to={"/"}>Home</Link>
                <Link to={"/t-shirt"}>T-shirt</Link>
                <Link to={"/bathroom"}>Bathroom</Link>
                <Link to={"/shoes"}>Shoes</Link>
                <Link to={"/pan-organizer"}>Pan Organizer</Link>
                <Link to={"/doors"}>Doors</Link>
                <Link to={"/vacuum"}>Vacuum</Link>
                <Link to={"/honey"}>Honey</Link>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center lg:gap-x-[68px] gap-x-10 gap-y-6 pb-30">
                <div className="relative flex w-full shrink">
                    <p className="text-secondary-foreground absolute top-1/2 -translate-y-1/2 left-4"><HoSearch className="lg:size-8 size-6" /></p>
                    <Input placeholder="Search Products" className="placeholder:text-[#97B5CD] lg:pl-16 pl-10 pr-8" />
                    <button className="lg:px-10 px-5 py-2.5 bg-secondary text-white lg:text-2xl text-xl font-bold -ml-4 rounded-tr-[20px] rounded-br-[20px]">search</button>
                </div>
                <div className="flex lg:gap-12 gap-5 shrink-0">
                    <p className="flex sm:gap-4 gap-2 items-center lg:text-2xl smLtext-xl text-lg font-bold text-secondary-foreground cursor-pointer">
                        <span className="opacity-60 text-black"> <HoUser className="lg:size-[46px] size-9" /></span>
                        Personal account
                    </p>
                    <p className="flex sm:gap-4 gap-2 items-center lg:text-2xl smLtext-xl text-lg font-bold text-secondary-foreground cursor-pointer">
                        <span className="opacity-60 text-black"> <HoHeart className="lg:w-[30px] lg:h-7 size-6" /></span>
                        Favorite
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderSearch