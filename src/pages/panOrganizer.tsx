import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroPanOrganizer from "@/components/sections/heros/heroPanOrganizer"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { seominsooData } from "@/db/seominsooData"

const PanOrganizer = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-muted"
        inputStyle="placeholder:text-muted-foreground border-muted"
      />
      <HeroPanOrganizer />
      <Partners className="bg-muted" />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={seominsooData}
        borderColor="border-primary"
        btnColor="bg-primary"
        titleColor="text-primary-foreground"
      />
      <Subscribe />
    </main>
  )
}

export default PanOrganizer