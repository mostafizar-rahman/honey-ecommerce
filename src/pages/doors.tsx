import HeaderSearch from "@/components/sections/headers/headerSearch"
import HeroDoor from "@/components/sections/heros/heroDoor"

const Doors = () => {
  return (
    <main className="bg-background">
      <HeaderSearch
        btnStyle="bg-secondary"
        inputStyle="placeholder:text-secondary-foreground border-secondary"
      />
      <HeroDoor />
    </main>
  )
}

export default Doors