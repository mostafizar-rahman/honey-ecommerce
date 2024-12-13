import Header from "@/components/sections/headers/header"
import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroHoney from "@/components/sections/heros/heroHoney"
import HoneyResearch from "@/components/sections/honeyResearch"
import LatestProductsTwoSlider from "@/components/sections/latestProductsTwoSlider"
import ProductsCategory from "@/components/sections/productsCategory"
import Subscribe from "@/components/sections/subscribe"
import { honeyData } from "@/db/honeyData"

const Honey = () => {
  return (
    <main className="bg-background">
      <HeroHoney />
      <Header />
      <HeaderSearch
        btnStyle="bg-accent"
        inputStyle="placeholder:text-accent-foreground border-accent"
      />
      <HoneyResearch />
      <ProductsCategory />
      <LatestProductsTwoSlider
        data={honeyData}
        borderColor="border-accent"
        btnColor="bg-accent"
        titleColor="text-accent-foreground"
        isTitleShow={false}
      />
      <Subscribe />
    </main>
  )
}

export default Honey