import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroVacuum from "@/components/sections/heros/heroVacuum"

const Vacuum = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-secondary"
        inputStyle="placeholder:text-secondary-foreground border-secondary"
      />
      <HeroVacuum />
    </main>
  )
}

export default Vacuum