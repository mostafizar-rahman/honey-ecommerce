import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
const Partners = ({className}:{className:string}) => {
    return (
        <div className={cn("lg:mb-30 mb-20 py-[17px]", className)}>
            <Marquee>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Instagram</h6>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Tiktok</h6>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Facebook</h6>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Instagram</h6>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Tiktok</h6>
                <h6 className="text-white font-bold text-[56px] mx-[63px]">Facebook</h6>
            </Marquee>
        </div>
    )
}

export default Partners