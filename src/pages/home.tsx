import Prifing from "@/components/sections/pricing"
import Ads from "@/components/sections/ads"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import LatestProducts from "@/components/sections/latestProducts"
import { vacuumCleanerData } from "@/db/vacuumCleanerData"
import { honeyData } from "@/db/honeyData"
import { tShirtData } from "@/db/tShirtData"
import { seominsooData } from "@/db/seominsooData"
import { bathroomToolsData } from "@/db/bathroomToolsData"
import { shoesData } from "@/db/shoesData"
import { doorData } from "@/db/doorData"
import Subscribe from "@/components/sections/subscribe"
import HeaderSearch from "@/components/sections/headers/headerSearch"


const Home = () => {
    return (
        <main className="bg-background">
            <HeaderSearch
                textColor="text-secondary-foreground"
                inputStyle="placeholder:text-[#97B5CD] border-secondary"
                btnStyle="bg-secondary"
            />
            <Prifing />
            <Ads />
            <Partners className="bg-[#47B5CC]" />
            <ProductsCategory />
            <LatestProducts
                data={vacuumCleanerData}
                sectionSpaceY="lg:mt-[180px] mt-25"
            />
            <LatestProducts
                data={honeyData}
                borderColor="border-accent"
                btnColor="bg-accent"
                titleColor="text-accent-foreground"
                sectionTitleBorderColor="after:bg-accent"
            />
            <LatestProducts
                data={seominsooData}
            />
            <LatestProducts
                data={tShirtData}
                borderColor="border-destructive"
                btnColor="bg-destructive"
                titleColor="text-destructive-foreground"
                sectionTitleBorderColor="after:bg-destructive"
            />
            <LatestProducts
                data={bathroomToolsData}
                borderColor="border-muted"
                btnColor="bg-muted"
                titleColor="text-muted-foreground"
                sectionTitleBorderColor="after:bg-muted"
            />
            <LatestProducts
                data={shoesData}
                borderColor="border-popover"
                btnColor="bg-popover"
                titleColor="text-popover-foreground"
                sectionTitleBorderColor="after:bg-popover"
            />
            <LatestProducts
                data={doorData}
            />
            <Subscribe />
        </main>
    )
}

export default Home