import Header from "@/components/sections/headers/header"
import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroHoney from "@/components/sections/heros/heroHoney"
import HoneyResearch from "@/components/sections/honeyResearch"

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
    </main>
  )
}

export default Honey