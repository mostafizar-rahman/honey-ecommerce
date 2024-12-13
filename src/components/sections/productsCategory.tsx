import { categoryData } from "@/db/categoryData"
import { Link } from "react-router-dom"

const ProductsCategory = () => {
    return (
        <div className="px-[15px] lg:px-7.5 overflow-x-auto scrollbar-hidden">
            <div className="flex lg:gap-6 min-w-[1380px]">
                {
                    categoryData.map(({ category, id, img, path }) => {
                        return (
                            <div key={id} className="text-center flex flex-col items-center">
                                <div className="flex justify-center items-center lg:w-[207px] lg:h-[207px] w-[180px] h-[180px] border-[3px] border-secondary rounded-full mb-6 overflow-hidden">
                                    <img src={img} alt="img" className="lg:w-auto w-28 h-auto" />
                                </div>
                                <Link to={path} className="text-primary-foreground lg:text-[32px] text-[26px] font-bold text-center relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[3px] after:bg-primary hover:opacity-80 transition-all duration-500">{category}</Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProductsCategory