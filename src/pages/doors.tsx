import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroDoor from "@/components/sections/heros/heroDoor"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { doorData } from "@/db/doorData"

const Doors = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-secondary"
        inputStyle="placeholder:text-secondary-foreground border-secondary"
      />
      <HeroDoor />
      <Partners className="bg-secondary" />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={doorData}
        borderColor="border-primary"
        btnColor="bg-primary"
        titleColor="text-primary-foreground"
      />
      <Subscribe />
    </main>
  )
}

export default Doors