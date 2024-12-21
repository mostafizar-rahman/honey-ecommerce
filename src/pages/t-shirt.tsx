import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroTShirt from "@/components/sections/heros/heroTShirt"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import Partners from "@/components/sections/partners"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { tShirtData } from "@/db/tShirtData"

const Tshirt = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-destructive"
        inputStyle="placeholder:text-destructive-foreground border-destructive"
      />
      <HeroTShirt />
      <Partners className="bg-destructive" />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={tShirtData}
        borderColor="border-destructive"
        btnColor="bg-destructive"
        titleColor="text-destructive-foreground"
      />
       <Subscribe />
    </main>
  )
}

export default Tshirt