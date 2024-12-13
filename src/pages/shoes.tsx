import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroShoes from "@/components/sections/heros/heroShoes"

const Shoes = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-green"
        inputStyle="placeholder:text-green-foreground border-green"
      />
      <HeroShoes />
    </main>
  )
}

export default Shoes