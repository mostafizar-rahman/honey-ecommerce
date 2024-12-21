import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroBathroom from "@/components/sections/heros/heroBathroom"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { bathroomToolsData } from "@/db/bathroomToolsData"

const Bathroom = () => {
    return (
        <main className="bg-background">
            
            <HeaderSearch
                btnStyle="bg-muted"
                inputStyle="placeholder:text-muted-foreground border-muted"
            />
            <HeroBathroom />
            <Partners className="bg-muted" />
            <ProductsCategory />
            <LatestProductsTwoSlider
                data={bathroomToolsData}
                borderColor="border-muted"
                btnColor="bg-muted"
                titleColor="text-muted-foreground"
            />
            <Subscribe />
        </main>
    )
}

export default Bathroom