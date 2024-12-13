import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface ProductTypes {
    title: string,
    thumbnail: string,
    price: number,
    description: string,
    borderColor?: string,
    titleColor?: string,
    btnColor?: string,
}
const Card = ({ description, price, thumbnail, title, borderColor, titleColor, btnColor }: ProductTypes) => {
    return (
        <div className="overflow-hidden">
            <div className={cn("border-[3px] border-primary rounded-[20px]", borderColor)}>
                <div className="pt-6 px-12">
                    <img src={thumbnail} alt="img" className="w-full h-auto"/>
                </div>
                <div className="px-6 mt-6">
                    <div className="flex justify-between items-center mb-4">
                        <p className="lg:text-5xl text-4xl font-bold text-secondary-foreground">${price}</p>
                        <div className="flex gap-3">
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                            <img src="/images/star.png" alt="star" />
                        </div>
                    </div>
                    <a href="#" className={cn("lg:text-4xl text-[26px] lg:leading-normal font-semibold text-primary-foreground hover:opacity-80 transition-all duration-500", titleColor)}>{title}</a>
                    <p className="mt-2 pb-8 text-lg text-[rgba(82,131,171,0.60)] leading-normal">{description}</p>
                </div>
                <div className="flex justify-end">
                    <Link to={"/product-view"} className={cn("bg-primary px-8 py-4 font-bold lg:text-[32px] text-[26px] text-white rounded-tl-[20px] rounded-br-[14px] hover:opacity-80 transition-all duration-500", btnColor)}>Show product</Link>
                </div>
            </div>
        </div>
    )
}

export default Card