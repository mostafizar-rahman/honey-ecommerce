import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroTShirt from "@/components/sections/heros/heroTShirt"

const Tshirt = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-destructive"
        inputStyle="placeholder:text-destructive-foreground border-destructive"
      />
      <HeroTShirt />
    </main>
  )
}

export default Tshirt