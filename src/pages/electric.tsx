import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroVacuum from "@/components/sections/heros/heroVacuum"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { vacuumCleanerData } from "@/db/vacuumCleanerData"

const Electric = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-secondary"
        inputStyle="placeholder:text-secondary-foreground border-secondary"
      />
      <HeroVacuum />
      <Partners className="bg-secondary" />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={vacuumCleanerData}
        borderColor="border-primary"
        btnColor="bg-primary"
        titleColor="text-primary-foreground"
      />
      <Subscribe />
    </main>
  )
}

export default Electric