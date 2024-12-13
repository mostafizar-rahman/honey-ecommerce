import { Button } from "@/components/ui/button"
import { HoCopy } from "@/lib/icon"

const ProductShortInfo = () => {
    return (
        <div>
            <h2 className="font-bold text-[80px] mb-8 text-foreground">Honey</h2>
            <p className="text-[40px] text-[rgba(0,0,0,0.70)]">Category : <span className="text-secondary-foreground">Tools</span> </p>
            <p className="text-[40px] text-[rgba(0,0,0,0.70)] mt-6">Product Code : <span className="text-[#292D32]"><HoCopy className="inline" /></span> j974-1 </p>
            <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                    <img src="/images/star.png" alt="star" />
                </div>
                <b className="text-[#0A5C9F] font-medium text-[40px]">o reviews</b>
            </div>
            <div className="mt-8">
                <b className="text-[#00000099] text-5xl font-bold relative after:absolute after:bottom-2 after:left-0 after:w-[110%] after:h-[3px] after:bg-[#C71A1A] after:-rotate-[23deg] after:origin-left">
                    $89
                </b>
                <b className="text-foreground text-5xl font-bold mt-4 block">
                    $79
                </b>
            </div>
            <div className="mt-8 flex items-center gap-4">
                <span className="text-[40px] text-[rgba(0,0,0,0.70)]">Color Available : </span>
                <ul className="flex gap-4">
                    <li className="w-7.5 h-7.5 rounded-full cursor-pointer bg-[#F51414]"></li>
                    <li className="w-7.5 h-7.5 rounded-full cursor-pointer bg-[#5283AB]"></li>
                    <li className="w-7.5 h-7.5 rounded-full cursor-pointer bg-[#E5C100]"></li>
                </ul>
            </div>
            <div className="mt-6 flex items-center gap-4">
                <span className="text-[40px] text-[rgba(0,0,0,0.70)]">Size : </span>
                <ul className="flex gap-2">
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase cursor-pointer">m</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase">-</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase cursor-pointer">l</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase">-</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase cursor-pointer">xl</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase">-</li>
                    <li className="text-[40px] text-[rgba(0,0,0,0.70)] uppercase cursor-pointer">xxl</li>
                </ul>
            </div>
            <p className="text-foreground text-[40px] font-medium mt-8">In stock : 8</p>
            <div className="mt-4 py-[11px] px-2 border-t border-b border-t-black border-b-black inline-flex items-center gap-11">
                <div className="flex gap-7.5 items-center">
                    <div className="w-7.5 h-7.5 bg-[#2970AA] flex items-center justify-center rounded-full cursor-pointer">
                        <span className="text-white text-[40px] font-medium -mt-1">-</span>
                    </div>
                    <span className="text-foreground text-[32px] font-medium">1</span>
                    <div className="w-7.5 h-7.5 bg-[#2970AA] flex items-center justify-center rounded-full cursor-pointer">
                        <span className="text-white text-[32px] font-medium">+</span>
                    </div>
                </div>
                <Button size={"sm"} className="bg-[#E72525]">Add to cart</Button>
            </div>
        </div>
    )
}

export default ProductShortInfo