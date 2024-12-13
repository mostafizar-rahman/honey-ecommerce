import ProductFaq from "@/components/sections/productDetails/productFaq"
import ProductPreview from "@/components/sections/productDetails/productPreview"
import ProductShortInfo from "@/components/sections/productDetails/productShortInfo"

const ProductView = () => {
    return (
        <main className="bg-background pt-[104px]">
            <div className="flex justify-between pr-[97px]">
                <div className="flex gap-7.5">
                    <ProductPreview />
                    <ProductShortInfo />
                </div>
                <ProductFaq />
            </div>
        </main>
    )
}

export default ProductView