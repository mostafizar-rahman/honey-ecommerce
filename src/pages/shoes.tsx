import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroShoes from "@/components/sections/heros/heroShoes"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { shoesData } from "@/db/shoesData"

const Shoes = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-green"
        inputStyle="placeholder:text-green-foreground border-green"
      />
      <HeroShoes />
      <Partners className="bg-green" />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={shoesData}
        borderColor="border-green"
        btnColor="bg-green"
        titleColor="text-green-foreground"
      />
      <Subscribe />
    </main>
  )
}

export default Shoes