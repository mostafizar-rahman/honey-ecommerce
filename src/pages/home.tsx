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

const Home = () => {
    return (
        <main className="bg-background">
            <Prifing />
            <Ads />
            <Partners />
            <ProductsCategory />
            <LatestProducts data={vacuumCleanerData} />
            <LatestProducts
                data={honeyData}
                borderColor="border-accent"
                btnColor="bg-accent"
                titleColor="text-accent-foreground"
                sectionSpaceY="lg:mt-[120px] mt-20"
                sectionTitleBorderColor="after:bg-accent"
            />
            <LatestProducts
                data={seominsooData}
                sectionSpaceY="lg:mt-[120px] mt-20"
            />
            <LatestProducts
                data={tShirtData}
                borderColor="border-destructive"
                btnColor="bg-destructive"
                titleColor="text-destructive-foreground"
                sectionSpaceY="lg:mt-[120px] mt-20"
                sectionTitleBorderColor="after:bg-destructive"
            />
            <LatestProducts
                data={bathroomToolsData}
                borderColor="border-muted"
                btnColor="bg-muted"
                titleColor="text-muted-foreground"
                sectionSpaceY="lg:mt-[120px] mt-20"
                sectionTitleBorderColor="after:bg-muted"
            />
            <LatestProducts
                data={shoesData}
                borderColor="border-popover"
                btnColor="bg-popover"
                titleColor="text-popover-foreground"
                sectionSpaceY="lg:mt-[120px] mt-20"
                sectionTitleBorderColor="after:bg-popover"
            />
            <LatestProducts
                data={doorData}
                sectionSpaceY="lg:mt-[120px] mt-20"
            />
            <Subscribe />
        </main>
    )
}

export default Home